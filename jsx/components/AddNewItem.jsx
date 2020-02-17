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

  handleSubmit(e) {
    const { items, temp } = this.state;
    this.setState(
      {
        items: items.concat(temp),
        temp: '',
      },
    );
    e.preventDefault();
  }

  removeItem(index) {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
    // alert(this.state.items)
  }

  render() {
    const { items, temp } = this.state;
    return (
      <div>
        <form id="formAddItem" onSubmit={this.handleSubmit}>
          <input type="text" value={temp} onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
        <ItemList itemLists={items} removeItem={this.removeItem} />
      </div>
    );
  }
}
