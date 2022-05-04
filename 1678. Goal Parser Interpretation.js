var interpret = function (command) {
  return command.replaceAll('(al)', 'al').replaceAll('()', 'o');
};

console.log(interpret('G()(al)'));
