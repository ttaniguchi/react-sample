import React, { Component } from 'react';
import NewItemRow from './NewItemRow';
import ItemList from './ItemList';


export default class AddNewItem extends Component{
    constructor(props){
        super(props)
        this.state={
            items: [],
            temp:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.removeItem=this.removeItem.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({temp: e.target.value})
    }
    handleSubmit(e){
        this.setState({items: this.state.items.concat(this.state.temp),
                        temp: ''})
        e.preventDefault()
    }
    removeItem(index){
        const temp = this.state.items
        temp.splice(index,1)
        this.setState({items: temp })
    }
    render(){
        return(
            <div>
                 <form id="formAddItem" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.temp} onChange={this.handleChange}></input>
                    <button type="submit">Add</button>
                </form>
                <ItemList itemLists={this.state.items} removeItem={this.removeItem}/>
            </div>      
        )
    }
}