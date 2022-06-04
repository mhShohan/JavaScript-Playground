var flipAndInvertImage = function (image) {
    const revArr = []
    for (let i of image) {
        revArr.push(i.reverse())
    }

    for (let i in revArr) {
        for (let j in revArr[i]) {
            if (revArr[i][j] === 0) {
                revArr[i][j] = 1
            } else {
                revArr[i][j] = 0
            }
        }
    }

    return revArr
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]));