import React, { Component } from "react";
 
export default class NewItemRow extends Component {
  constructor(props){
    super(props)
    this.handleDeleteButton=this.handleDeleteButton.bind(this)
  }

  handleDeleteButton(){
    var index = parseInt(this.props.index)
    this.props.removeItem(index)
  }

  render(){
    return (
      <li>{this.props.value}<button onClick={this.handleDeleteButton}>Delete</button></li>
    );
  }
};