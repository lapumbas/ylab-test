import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './style.less';

class ListItem extends Component {
  handleChange = evt => {
    this.props.dispatch(actions.list.change(evt.target.value, this.props.id));
  }

  handleEnterOut = evt => {
    if (evt.keyCode === 13) {
      //TODO axios.post
      console.log(`axios.post ${this.props.list[this.props.id]}`);
    }
  }
  
  handleOut = () => {
    //TODO axios.post
    console.log(`axios.post ${this.props.list[this.props.id]}`);
  }

  componentDidMount() {
    this.props.dispatch(actions.list.fill(this.props.title, this.props.id));
  }

  render() {
    return (
      <li className="ListItem">
        <input
          className="ListItem__input"
          type="text"
          dataid={this.props.id}
          value={this.props.list[this.props.id]}
          onChange={e => this.handleChange(e)}
          onBlur={this.handleOut}
          onKeyDown={e => this.handleEnterOut(e)}
        />
        {this.props.children}
      </li>
    );
  }
}

export default connect(state => ({
  list: state.list
}))(ListItem);
