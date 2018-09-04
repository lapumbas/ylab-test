import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import data from '../../data/list.json';
import dataToTree from '../../utils/data-to-tree';
import ListItem from '../../components/lists/list-item';

class App extends Component {

  renderList = (arr) => {
    return arr.map(item => {
      const children = item.children.length === 0 ? null : <ul>{this.renderList(item.children)}</ul>;
      return (
        <ListItem
          key={item['_id']}
          id={item['_id']}
          title={item.title}
        >
          {children}
        </ListItem>
      );
    });
  }

  render() {
    const arr = dataToTree(data);
    return <ul>{this.renderList(arr)}</ul>;
  }
}

export default App;
