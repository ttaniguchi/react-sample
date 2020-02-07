import React, { Component } from 'react';
import NewItemRow from './NewItemRow';

export default class ItemList extends Component{
    constructor(props){
        super(props)
        //this.state ={itemModified: this.props.itemLists}
    }

    render(){
        return (
            <ul>{
                this.props.itemLists.map( (props, idx) => 
                <NewItemRow 
                index={idx}
                key={idx} 
                value={props.value} 
                removeItem={this.props.removeItem} /> )}
            </ul>
             
        )
    }
}