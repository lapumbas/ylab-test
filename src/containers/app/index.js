import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import data from '../../data/list.json';

class App extends Component {
  constructor(props) {
    super(props);
  }

  dataToTree(arr) {
    const nodes = {};
    return arr
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
  }

  componentDidMount() {
    console.log(this.dataToTree(data));
  }

  render() {
    return <div>Hi</div>;
  }
}

export default App;
