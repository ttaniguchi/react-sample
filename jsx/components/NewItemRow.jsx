import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewItemRow extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  handleDeleteButton() {
    const { index, removeItem } = this.props;
    removeItem(index);
  }

  render() {
    const { value } = this.props;
    return (
      <li>
        {value}
        <button type="button" onClick={this.handleDeleteButton}>Delete</button>
      </li>
    );
  }
}

NewItemRow.propTypes = {
  value: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
