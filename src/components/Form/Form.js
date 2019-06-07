import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
          img: '',
          name: '',
          price: 0
        }
    }


  componentDidMount(){
      axios.get('api/items').then(res => {
          this.setState({
            items: res.data
          })
      })
  }

  postItem() {
      const { input } = this.state;
      axios.post('/api/items', { img, name }).then(res => {
          this.setState({
            
          })
      })
  }

  deleteItem = id => {
    axios.delete(`/api/items/${id}`).then(res => {
        this.setState({
            
        })
    })
  }

  updateItem = id => {
      const
  }

  updateItem = id => {
      const { img, name } = this.state;
      axios.put(`/api/items/${id}`, {img, name}).then(res => {
          this.setState ({
              img: '',
              productName: '',
              editing: false
          })
      })
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
