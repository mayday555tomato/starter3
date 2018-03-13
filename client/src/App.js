import React, { Component } from 'react';
import bayerlogo from './Bayer_logo.svg';
import './App.css';
import InitScreen from './InitScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bayerlogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Certegra</h1>
        </header>
        <InitScreen />
      </div>
    );
  }
}

export default App;
