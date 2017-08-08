import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesome from 'react-fontawesome';
import StaticQuote from './quotes/StaticQuote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Random Quote Machine</h2>
        </div>
        <p className="App-intro">
            <FontAwesome className="fa-quote-left" name="leftQuote"/>
            &nbsp;
            <StaticQuote/>
            &nbsp;
            <FontAwesome className="fa-quote-right" name="rightQuote"/>
        </p>
      </div>
    );
  }
}

export default App;
