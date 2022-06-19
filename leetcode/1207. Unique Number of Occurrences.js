var uniqueOccurrences = function (arr) {
    let result = false;

    for (const i in arr) {
        let temp = arr[i];

        arr.splice(i, 1);

        if (arr.includes(temp)) {
            result = true;
        }
    }
    return result;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));