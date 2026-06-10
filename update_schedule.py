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


def _base(params):
    return {**params, 'os': 'android', 'os_ver': 35, 'app_ver': APP_VERSION, 'format': 'json'}


def _call(method, path, secret=None, **params):
    if secret:
        params['secret'] = secret
    res = requests.request(method, f'{API}/{path}', params=_base(params), headers=HEADERS, timeout=30)
    res.raise_for_status()
    data = res.json()
    if 'error' in data:
        popup = data['error'].get('englishPopup', {})
        raise RuntimeError(f"{popup.get('subject')}: {popup.get('body')}")
    return data['success']


def register():
    # The bare jumpg-webapi endpoint is IP-banned; jumpg-api requires a
    # registered device secret obtained through this handshake.
    device_token = hashlib.md5(str(uuid.uuid4()).encode()).hexdigest()
    security_key = hashlib.md5((device_token + SECRET_SALT).encode()).hexdigest()
    data = _call('PUT', 'register', device_token=device_token, security_key=security_key)
    return data['registerationData']['deviceSecret']


if __name__ == '__main__':
    secret = register()
    detail = _call('GET', 'title_detailV3', secret=secret, title_id=TITLE_ID, lang='eng', clang='eng')
    view = detail['titleDetailView']

    timestamp = view.get('nextTimeStamp')
    if not timestamp:
        print('No nextTimeStamp found in the response.')
    else:
        try:
            last_chapter = view['chapterListV2'][-1]['name']
            current_chapter = int(last_chapter.replace('#', '')) + 1
        except (IndexError, KeyError, ValueError):
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
