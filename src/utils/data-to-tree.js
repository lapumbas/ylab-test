export default (arr) => {
  const nodes = {};
  const newArr = [...arr];
  return newArr
    .sort((a, b) => {
      return a._id >= b._id;
    })
    .filter(item => {
      const id = item['_id'];
      const parentId = item['parent'];

      nodes[id] = _.defaults(item, nodes[id], { children: [] });
      parentId &&
        (nodes[parentId] = nodes[parentId] || { children: [] })[
          'children'
        ].push(item);

      return !parentId;
    });
};
