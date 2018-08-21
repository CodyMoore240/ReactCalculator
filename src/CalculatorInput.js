import React, { Component } from 'react';
import './calculatorInput.css';

class CalculatorInput extends Component {
  render() {
    return (
      //Input for the calculator
      <input type="text" disabled="true" className="calculatorInput" value={this.props.value}/>
    )
  }
}

export default CalculatorInput;
