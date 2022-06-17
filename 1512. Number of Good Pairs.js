var numIdenticalPairs = function (nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) total++;
        }
    }

    return total;
};