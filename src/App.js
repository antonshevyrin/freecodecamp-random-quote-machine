import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Random Quote Machine</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <FontAwesome className="fa-camera-retro" name="camera"/>

            <FontAwesome
                className='super-crazy-colors'
                name='rocket'
                size='2x'
                spin
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
        </p>
      </div>
    );
  }
}

export default App;
