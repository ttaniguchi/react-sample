import React, { Component } from 'react';

export default class CountItem extends Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
        this.handleClick=this.handleClick.bind(this)
    }

   handleClick (){
       this.setState({count: this.state.count + 1})
   }
    render(){
        return (
            <div>
                <div>
                    <h2>Count: {this.state.count}</h2>
                </div>
                <button onClick={this.handleClick}>Count up</button>
            </div>
        )
    }
}