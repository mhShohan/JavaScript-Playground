var reverseWords = function (s) {
  let strArr = s.split(' ');
  let result = '';

  for (let word of strArr) {
    result += word.split('').reverse().join('') + ' ';
  }

  return result;
};

console.log(reverseWords("Let's take LeetCode contest"));
