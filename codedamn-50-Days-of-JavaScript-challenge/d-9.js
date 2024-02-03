const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here

    return Object.keys(obj).length === 0;
}

console.log(isEmpty(obj));
