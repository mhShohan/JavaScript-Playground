const preOrder = (node, list) => {
  list.push(node.val);
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      preOrder(node.children[i], list);
    }
  }
  return list;
};

var preorder = function (root) {
  if (root === null) return [];
  return preOrder(root, []);
};

console.log(preorder([1, null, 3, 2, 4, null, 5, 6]));
