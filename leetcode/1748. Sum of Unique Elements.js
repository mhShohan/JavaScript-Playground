var sumOfUnique = function (nums) {
    const viewedNumItems = [];
    let result = 0;

    nums.forEach((num, index) => {
        if (viewedNumItems.indexOf(num) === -1) {
            if (index === nums.lastIndexOf(num)) {
                result += num;
            }
            viewedNumItems.push(num);
        }
    });

    return result;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));