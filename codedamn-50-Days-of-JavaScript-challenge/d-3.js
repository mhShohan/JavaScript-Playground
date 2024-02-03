const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here

    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseGivenInteger(num));
