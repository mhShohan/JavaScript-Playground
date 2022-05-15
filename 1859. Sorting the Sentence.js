var sortSentence = function (s) {
  let stringArr = s.split(' ');
  let rsltObj = {};
  let result = '';

  for (const str of stringArr) {
    rsltObj[str.charAt(str.length - 1)] = str.substring(0, str.length - 1);
  }

  for (let key in rsltObj) {
    result += rsltObj[key] + ' ';
  }

  return result.trimEnd();
};

console.log(sortSentence('is2 sentence4 This1 a3'));
console.log(sortSentence('Myself2 Me1 I4 and3'));
