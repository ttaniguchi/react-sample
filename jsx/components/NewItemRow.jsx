import React, { Component } from "react";
 
export default class NewItemRow extends Component {
  constructor(props){
    super(props)
    this.handleDeleteButton=this.handleDeleteButton.bind(this)
  }

  handleDeleteButton(){
    this.props.removeItem(this.props.index)
  }

  render(){
    return (
      <li>{this.props.value}<button onClick={this.handleDeleteButton}>Delete</button></li>
    );
  }
};