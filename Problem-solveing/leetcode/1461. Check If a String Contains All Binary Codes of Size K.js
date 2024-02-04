var hasAllCodes = function (s, k) {
    const subString = new Set()

    for (let i = 0; i + k - 1 < s.length; i++) {
        subString.add(s.slice(i, i + k))
    }
    console.log(subString);
    // return subString.size === 2 ** k
};


console.log(hasAllCodes("00110110", 2));
// console.log(hasAllCodes("0110", 1));
// console.log(hasAllCodes("0110", 2));