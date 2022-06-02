var transpose = function (matrix) {
    let result = []

    for (let i = 0; i < matrix[0].length; i++) {
        result.push([])

        for (let j = 0; j < matrix.length; j++) {
            result[i].push(matrix[j][i])
        }
    }

    return result
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
console.log(transpose([[1, 2, 3, 11,], [4, 5, 6, 12], [7, 8, 9, 13], [11, 12, 13, 14]]));