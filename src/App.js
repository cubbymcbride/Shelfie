import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { HashRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
    </div>
  );
}

