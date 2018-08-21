import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorContainer from './CalculatorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator in React</h1>
        </header>
        <div className="App-intro">
          <CalculatorContainer></CalculatorContainer>
        </div>
      </div>
    );
  }
}

export default App;
