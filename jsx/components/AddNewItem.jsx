import React, { Component } from 'react';
import ItemList from './ItemList';

export default class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      temp: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temp: e.target.value });
  }

  handleSubmit() {
    const { items, temp } = this.state;
    this.setState(
      {
        items: items.concat(temp),
        temp: '',
      },
    );
  }

  removeItem(index) {
    const { items } = this.state;
    items.splice(index, 1);
    const tmp = [...items];
    this.setState(
      {
        items: tmp,
        temp: '',
      },
    );
  }

  render() {
    const { items, temp } = this.state;
    return (
      <div>
        <input type="text" value={temp} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>Add</button>
        <ItemList itemLists={items} removeItem={this.removeItem} />
      </div>
    );
  }
}
