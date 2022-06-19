var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  const rules = ['type', 'color', 'name'];
  const index = rules.findIndex((i) => i === ruleKey);

  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) {
      count++;
    }
  }

  return count;
};

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
);

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'phone'],
      ['phone', 'gold', 'iphone'],
    ],
    'type',
    'phone'
  )
);
