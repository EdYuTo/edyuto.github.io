import datetime
import json
import mangaplus_pb2
import requests

if __name__ == '__main__':
    url = 'https://jumpg-webapi.tokyo-cdn.com/api/title_detailV3?title_id=100020'
    response = requests.get(url)
    data = response.content

    msg = mangaplus_pb2.Response()
    msg.ParseFromString(data)

    timestamp = msg.success.titleDetailView.nextTimeStamp
    if timestamp:
        date_str = datetime.datetime.fromtimestamp(timestamp, datetime.UTC)
        with open('schedule.json', 'w') as schedule_file:
            schedule = {
                'timestamp': timestamp,
                'date': date_str.strftime('%a %b %d %H:%M:%S %z %Y')
            }
            print(f"Updating schedule with: {schedule}")
            json.dump(schedule, schedule_file, indent=2)
            schedule_file.close()
    else:
        print("No nextTimeStamp found in the response.")
