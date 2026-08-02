import datetime
import hashlib
import json
import uuid

import requests

# @package jp.co.shueisha.mangaplus.Constants;
API = 'https://jumpg-api.tokyo-cdn.com/api'
# @package jp.co.shueisha.mangaplus.api.ApiFactory;
APP_VERSION = 237
TITLE_ID = 100020  # One Piece
# @package jp.co.shueisha.mangaplus.util.UtilKt; security_key salt
SECRET_SALT = '4Kin9vGg'
HEADERS = {'User-Agent': 'okhttp/4.12.0', 'Accept-Encoding': 'gzip'}

# Field numbers from the app's protobuf schema. Responses used to be readable
# with `format=json`, but that query parameter is now rejected at the edge with
# a bare nginx 403, so we speak the app's native protobuf instead.
RESPONSE_SUCCESS = 1
RESPONSE_ERROR = 2
ERROR_ENGLISH_POPUP = 2
POPUP_SUBJECT = 1
POPUP_BODY = 2
SUCCESS_REGISTRATION = 2
REGISTRATION_DEVICE_SECRET = 1
SUCCESS_TITLE_DETAIL = 8
DETAIL_NEXT_TIMESTAMP = 5
DETAIL_CHAPTER = 38
CHAPTER_NAME = 3


def _varint(buf, pos):
    result = shift = 0
    while True:
        byte = buf[pos]
        pos += 1
        result |= (byte & 0x7F) << shift
        if not byte & 0x80:
            return result, pos
        shift += 7


def _fields(buf):
    """Yield (field_number, value) pairs of a protobuf message.

    Values are ints for varints and bytes for length-delimited fields; fixed
    width fields are skipped since nothing we read uses them.
    """
    pos = 0
    while pos < len(buf):
        key, pos = _varint(buf, pos)
        field, wire = key >> 3, key & 7
        if wire == 0:
            value, pos = _varint(buf, pos)
        elif wire == 1:
            value, pos = None, pos + 8
        elif wire == 2:
            length, pos = _varint(buf, pos)
            value, pos = buf[pos:pos + length], pos + length
        elif wire == 5:
            value, pos = None, pos + 4
        else:
            raise ValueError(f'unsupported protobuf wire type {wire}')
        yield field, value


def _get(buf, field):
    for number, value in _fields(buf):
        if number == field:
            return value
    return None


def _get_all(buf, field):
    return [value for number, value in _fields(buf) if number == field]


def _text(value):
    return value.decode('utf-8') if value is not None else None


def _call(method, path, secret=None, **params):
    if secret:
        params['secret'] = secret
    params = {**params, 'os': 'android', 'os_ver': 35, 'app_ver': APP_VERSION}
    res = requests.request(method, f'{API}/{path}', params=params, headers=HEADERS, timeout=30)
    res.raise_for_status()

    error = _get(res.content, RESPONSE_ERROR)
    if error is not None:
        popup = _get(error, ERROR_ENGLISH_POPUP) or b''
        raise RuntimeError(f'{_text(_get(popup, POPUP_SUBJECT))}: {_text(_get(popup, POPUP_BODY))}')

    success = _get(res.content, RESPONSE_SUCCESS)
    if success is None:
        raise RuntimeError(f'Unexpected response from {path}: {res.content[:200]!r}')
    return success


def register():
    # The bare jumpg-webapi endpoint is IP-banned; jumpg-api requires a
    # registered device secret obtained through this handshake.
    device_token = hashlib.md5(str(uuid.uuid4()).encode()).hexdigest()
    security_key = hashlib.md5((device_token + SECRET_SALT).encode()).hexdigest()
    data = _call('PUT', 'register', device_token=device_token, security_key=security_key)
    return _text(_get(_get(data, SUCCESS_REGISTRATION), REGISTRATION_DEVICE_SECRET))


if __name__ == '__main__':
    secret = register()
    detail = _call('GET', 'title_detailV3', secret=secret, title_id=TITLE_ID, lang='eng', clang='eng')
    view = _get(detail, SUCCESS_TITLE_DETAIL)

    timestamp = _get(view, DETAIL_NEXT_TIMESTAMP) if view is not None else None
    if not timestamp:
        print('No nextTimeStamp found in the response.')
    else:
        try:
            last_chapter = _text(_get(_get_all(view, DETAIL_CHAPTER)[-1], CHAPTER_NAME))
            current_chapter = int(last_chapter.replace('#', '')) + 1
        except (AttributeError, IndexError, ValueError):
            current_chapter = ''

        date_str = datetime.datetime.fromtimestamp(timestamp, datetime.UTC)
        with open('schedule.json', 'w') as schedule_file:
            schedule = {
                'timestamp': timestamp,
                'date': date_str.strftime('%a %b %d %H:%M:%S %z %Y'),
                'chapter': current_chapter
            }
            print(f"Updating schedule with: {schedule}")
            json.dump(schedule, schedule_file, indent=2)
