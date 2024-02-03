const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
    let hourMin, output;

    if (time.endsWith('AM')) {
        hourMin = time.split('AM')[0];
    }
    if (time.endsWith('PM')) {
        hourMin = time.split('PM')[0];
    }
    let [hour, minute] = hourMin.split(':');

    hour = parseInt(hour);
    minute = parseInt(minute);
    console.log(minute);

    if (time.endsWith('AM')) {
        if (hour == 12) {
            output = '00:' + minute;
        } else if (hour < 10) {
            if (minute === 0) {
                output = '0' + hour + ':' + minute + '0';
            } else {
                output = '0' + hour + ':' + minute;
            }
        } else if (minute < 10 && minute > 0) {
            output = hour + ':' + '0' + minute;
        } else {
            output = hour + ':' + minute;
        }
    }
    if (time.endsWith('PM')) {
        if (hour == 12) {
            output = hour + ':' + minute;
        } else if (minute < 10) {
            output = hour + 12 + ':' + '0' + minute;
        } else {
            output = hour + 12 + ':' + minute;
        }
    }

    return output;
}

console.log(convertTo24HrsFormat(time));
console.log(convertTo24HrsFormat('5:00AM'));
