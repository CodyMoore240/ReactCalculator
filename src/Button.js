import React, { Component } from 'react';
//import components

//import css
import './button.css';

class Button extends Component {
  handleOnClick = () => {
    this.props.clickFunction(this.props.value)
  }

  render() {
    let inlineStyles = {}

    //if this needs to be a half button then inline style it
    if (this.props.half) {
      inlineStyles.height = '40px'
    }

    return (
      //Container for the calculator
      <button className="button" onClick={this.handleOnClick} type="button" style={inlineStyles}>{this.props.value}</button>
    );
  }
}

export default Button;
