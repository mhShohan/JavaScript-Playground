const isPalindrome = (input) => {
  if (input.length <= 1) {
    return true;
  }
  console.log(input);


  if (input.charAt(0) === input.charAt(input.length - 1)) {
    return isPalindrome(input.substring(1, input.length - 1));
  }

  return false;
};


// console.log(isPalindrome('a'));
// console.log(isPalindrome('ab'));
// console.log(isPalindrome('kayak'));
// console.log(isPalindrome('noyon'));
// console.log(isPalindrome('shohan'));
console.log(isPalindrome(''));