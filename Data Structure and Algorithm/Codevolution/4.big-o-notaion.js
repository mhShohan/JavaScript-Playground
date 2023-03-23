// O(n) => Linear
function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(5));

// O(1) =>
function add(n) {
    return (n * (n + 1)) / 2;
}

console.log(add(5));


// O(n^2) => Quadratic
function nestedLoop(n) {
    let add = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            add += j;
        }
    }
    return add;
}
console.log(nestedLoop(5));

// O(n^3) => for 3 nested loop

// O(log(n)) => logarithmic