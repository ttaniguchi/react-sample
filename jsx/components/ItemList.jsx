import React, { Component } from 'react';
import NewItemRow from './NewItemRow';

export default class ItemList extends Component{
    render(){
        return (
            <ul>{
                this.props.itemLists.map( (item, idx) => 
                <NewItemRow 
                index={idx}
                key={idx} 
                value={item} 
                removeItem={this.props.removeItem} /> )}
            </ul>
             
        )
    }
}