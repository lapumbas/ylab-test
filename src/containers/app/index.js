import React, { Component, Fragment } from 'react';
import _ from 'lodash';
// import data from '../../data/list.json';
import dataToTree from '../../utils/data-to-tree';
import ListItem from '../../components/lists/list-item';

const data = [
  { "_id": 5, "title": "Подпункт 2.2", "parent": 3 },
  { "_id": 4, "title": "Подпункт 2.1", "parent": 3 },
  { "_id": 6, "title": "Вложенный подпункт 2.2.1", "parent": 5 },
  { "_id": 3, "title": "Второй пункт", "parent": 1 },
  { "_id": 1, "title": "Список", "parent": null },
  { "_id": 7, "title": "Вложенный подпункт 2.2.2", "parent": 5 },
  { "_id": 9, "title": "Третий пункт", "parent": 1 },
  { "_id": 2, "title": "Первый пункт", "parent": 1 },
  { "_id": 8, "title": "Подпункт 2.3", "parent": 3 },
  { "_id": 10, "title": "Четвертый пункт", "parent": 1 }
];

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
