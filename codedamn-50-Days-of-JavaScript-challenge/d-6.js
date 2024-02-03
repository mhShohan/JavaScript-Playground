const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here

    let strArr = str.split(' ');
    let strAdd = [];
    let mainStr;

    for (let i = 0; i < wordLimit; i++) {
        strAdd.push(strArr[i]);
    }

    mainStr = strAdd.join(' ');

    return mainStr;
}

console.log(truncateWithWordLimit(str, wordLimit));
