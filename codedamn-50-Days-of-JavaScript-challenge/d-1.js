function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // write your solution here

    return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd);
}

console.log(randomNumberGeneratorInRange(5, 100));
