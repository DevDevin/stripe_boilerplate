import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Checkout
            name={'Follow your favorite sports team at'}
            description={'Open Source React Book'}
            amount={1}
          />
        </p>
        <p>Follow your favorite sports team at <a href="http://www.espn.com/">ESPN</a></p>
      </div>
    );
  }
}

export default App;
