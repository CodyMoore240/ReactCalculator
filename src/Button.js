import React, { Component } from 'react';
//import components

//import css
import './button.css';

class Button extends Component {
  handleOnClick = () => {
    this.props.clickFunction(this.props.value)
  }

  render() {
    return (
      //Container for the calculator
      <button className="button" onClick={this.handleOnClick} type="button">{this.props.value}</button>
    );
  }
}

export default Button;
