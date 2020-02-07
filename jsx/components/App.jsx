import React, { Component } from 'react';
import CountItem from './CountItem';
import NewItemRow from './NewItemRow';
import AddNewItem from './AddNewItem';

export default class App extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <div>
        <h1>HelloWorld!</h1>
        <CountItem />
        <AddNewItem/>
      </div>
    )
  }
}

