const longestConsecutiveSequence = (inputArray) => {
    // Your code here
    const srotArr = inputArray.sort((a, b) => a - b);
    const uniqVal = [...new Set(srotArr)];
    let output = [];
    let j = uniqVal[0];

    for (let i = 0; i < uniqVal.length; i++) {
        if (uniqVal[i] === j) {
            output.push(j);
            j++;
        }
    }

    return output.length;
};

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
