import React, { Component } from 'react';
import { Container, NavBar } from './components';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the game!</h2>
        </div>
        <p className="App-intro">
        <NavBar/>
        <Container/>
        </p>
    </div>
    );
  }
}

export default App;
