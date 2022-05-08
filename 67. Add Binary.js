var addBinary = function (a, b) {
  let result = parseInt(a, 2) + parseInt(b, 2);
  return result.toString(2);
};

console.log(addBinary('11', '1'));
