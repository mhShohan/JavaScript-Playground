const str = 'JavaScript is awesome';

function reverseAString(str) {
    // write your solution here

    return str.split('').reverse().join('');
}

console.log(reverseAString(str));
