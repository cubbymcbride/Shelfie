import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'


export default class App extends Component() {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
    </div>
  );
  }
}
