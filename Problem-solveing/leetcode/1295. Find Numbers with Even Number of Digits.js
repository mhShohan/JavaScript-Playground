var findNumbers = function (nums) {
    let result = 0
    for (let num of nums) {
        if (String(num).length % 2 === 0) {
            result++
        }
    }
    return result
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));