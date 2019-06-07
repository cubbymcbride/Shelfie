import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
          image_url: '',
          productName: '',
          price: 0
        }
    }

  componentDidMount(){
      axios.get('api/items').then(res => {
          this.setState({
            image_url: '',
            productName: '',
            price: 0
          })
      })
  }

  postItem() {
      const { input } = this.state;
      axios.post('/api/items', { items: input}).then(res => {
          this.setState({
            image_url: this.state.image_url,
            productName: this.state.productName,
            price: 0
          })
      })
  }

  onEdit = item => {
      this.setState({
          input: item
      })
  }

  resetState = () => {
    this.setState(this.state);
 }

    render(){
        return(
            <div className="Form">
            <p>Image URL:</p>
            <input 
            type = "text"
            name= 'imageUrl'
            />
            <p>Product Name:</p>
            <input
            type ="text"
            />
            <p>Price</p>
            <input 
            type= "number"
            />
            <br></br>
            <button className="ati" onClick={() => this.postItem()}>Add to Inventory</button>
            <button className="cancel" onClick>Cancel</button>
            </div>
            
        )
    }
}
