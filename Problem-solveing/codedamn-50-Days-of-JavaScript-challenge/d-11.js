function fibonacci(n) {
    // write your solution here
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    var prev_1 = 1,
        prev_2 = 1,
        current;
    // O(n)
    for (var i = 3; i <= n; i++) {
        current = prev_1 + prev_2;
        prev_1 = prev_2;
        prev_2 = current;
    }
    return current;
}

console.log(fibonacci(5));
