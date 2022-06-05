var digitSum = function (s, k) {
    while (s.length > k) {

        let tempStr = '';

        for (let index = 0; index < s.length; index += k) {
            let runningSum = 0;
            for (let j = index; j < index + k; j++) {
                runningSum += Number(s[j]) || 0;
            }
            tempStr += runningSum;
        }

        s = tempStr;
    }

    return s;
};

console.log(digitSum("11111222223", 3));