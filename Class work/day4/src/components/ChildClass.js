import React, { Component } from "react";
export default class ChildClass extends Component{
    render(){
        return(
            <div>{this.props.message}</div>
        )
    }
}