var countNegatives = function (grid) {
    let count = 0

    for (let i in grid) {
        for (let j in grid[i]) {
            if (grid[i][j] < 0) {
                count++
            }
        }
    }
    return count
};

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
console.log(countNegatives([[3, 2], [1, 0]]));