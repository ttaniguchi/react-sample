import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    width: 177px;
    height: 36px;
    justify-content: center;
    
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 13px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;

    /* White */

    color: #FFFFFF;

    background: #26B297;
    border-radius: 40px;
`;

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
                <h1>Count: {this.state.count} </h1>
                <Button onClick={this.handleClick}>Count Up</Button>
            </div>           
        )
    }
}