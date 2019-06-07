import React, { Component } from 'react'
import Axios from 'axios'

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
          product: [],
          input: ''
        }
    }

    handleInput(val){
    this.setState({
        input: val
    });
  }

    render(){
        return(
            <div>form
            <input></input>
            <button>Cancel</button>
            <input></input>
            <button>Add</button>
            <input></input>
            </div>
            
        )
    }
}
