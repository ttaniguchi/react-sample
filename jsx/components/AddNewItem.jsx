import React, { Component } from 'react';
import NewItemRow from './NewItemRow';
import ItemList from './ItemList';


export default class AddNewItem extends Component{
    constructor(props){
        super(props)
        this.state={
            items: []
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.removeItem=this.removeItem.bind(this)
    }
    handleSubmit(e){
        const arrayItem = this.state.items
        const temp = document.getElementById("input").value
        const form = document.getElementById("formAddItem")

        arrayItem.push({
            key: this.state.items.length,
            value: temp
        })

        this.setState({items: arrayItem})
        e.preventDefault()
        form.reset()
    }
    removeItem(index){
        const temp = this.state.items
        console.log(index)
        temp.splice(index,1)
        this.setState({items: temp })
        console.log(temp)
    }
    render(){
        return(
            <div>
                 <form id="formAddItem" onSubmit={this.handleSubmit}>
                    <input type="text" id="input"></input>
                    <button type="submit">Add</button>
                </form>
                <ItemList itemLists={this.state.items} removeItem={this.removeItem}/>
            </div>      
        )
    }
}