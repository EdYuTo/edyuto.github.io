import json
import sys

def try_convert(description, offset=0):
    try:
        return int(description) + offset
    except:
        return description

def calculate_offset(current_description, new_description):
    try:
        current_description = int(current_description)
        try:
            new_description = int(new_description)
            return new_description - current_description
        except:
            return -1
    except:
        try:
            new_description = int(new_description)
            return 1
        except:
            return 0

def update_schedule(week_number, chapter_description):
    with open('resources/schedule.json', 'r+') as schedule_file:
        schedule = json.load(schedule_file)
        for index, week_info in enumerate(schedule):
            current_week = int(week_info['Week'])
            if current_week == week_number:
                chapter_offset = calculate_offset(week_info['Description'], chapter_description)
                week_info['Description'] = try_convert(chapter_description)
                schedule[index] = week_info
            elif current_week > week_number:
                week_info['Description'] = try_convert(week_info['Description'], chapter_offset)
        schedule_file.truncate(0)
        schedule_file.seek(0)
        json.dump(schedule, schedule_file, indent=2)
        schedule_file.close()

if __name__ == '__main__':
    match len(sys.argv):
        case 2:
            update_schedule(int(sys.argv[1]), 'Oda Break')
        case 3:
            update_schedule(int(sys.argv[1]), sys.argv[2])
        case _:
            print(f'Usage: {sys.argv[0]} <week> <chapter_description>')
            sys.exit(1)