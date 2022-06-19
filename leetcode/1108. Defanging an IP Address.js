var defangIPaddr = function (address) {
  return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));
