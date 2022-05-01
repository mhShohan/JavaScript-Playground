var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return false;
  if (s1.length !== s2.length) return false;

  let arr = [];
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      arr.push(i);
    }

    if (arr.length > 2) return false;
  }

  if (arr.length == 2 && s1[arr[0]] == s2[arr[1]] && s1[arr[1]] == s2[arr[0]])
    return true;

  return false;
};

console.log(areAlmostEqual('bank', 'kanb'));
