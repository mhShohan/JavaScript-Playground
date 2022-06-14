var minimumTotal = function (triangle) {
    let result = 0

    for (let i of triangle) {
        result += Math.min(...i)
        console.log(Math.min(...i));
    }

    return result
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));