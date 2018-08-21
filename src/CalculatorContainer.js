import React, { Component } from 'react';
//import components
import CalculatorInput from './CalculatorInput';
import Button from './Button';

//import css
import './calculatorContainer.css';

class CalculatorContainer extends Component {
  constructor(props) {
    super(props);

    //create state to manage our values. We will retreive information from the child components and do the calculations here.
    this.state = {
      inputValue: 0,
      preCalcValue:0,
      operator: null
    };
  }

  //create function that we are going to pass to the button components in order to send the value back
  storeValue = (val) => {
    //create a var to house the new value
    let newString = this.state.inputValue

    //take the current value and append the new value on the end of it
    //if it is curently 0 then just make it the new value
    if (newString == 0) {
      newString = `${val}`
    } else {
      newString = `${newString}${val}`
    }

    this.setState({
      inputValue: newString
    })
  }

  //Create a function that stores the value in state along with the operator
  storeCalc = (operator) => {
    this.setState({
      inputValue: 0,
      preCalcValue: this.state.inputValue,
      operator
    })
  }

  //Function to calculate the values once equals is pressed
  calculateValue = () => {
    //parse the values to make sure we are dealing with ints
    let firstValue = parseFloat(this.state.preCalcValue)
    let secondValue = parseFloat(this.state.inputValue)
    let finalValue = 0

    //create a switch statement to handle the type of calculation
    switch (this.state.operator) {
      //multiply
      case 'x':
        finalValue = firstValue * secondValue
        break;
      //divide
      case '/':
        finalValue = firstValue / secondValue
      break;
      //subtraction
      case '-':
        finalValue = firstValue - secondValue
        break;
      //addition
      case '+':
        finalValue = firstValue + secondValue
        break;

    }
    console.log(`calculate the values: ${this.state.preCalcValue} ${this.state.operator} ${this.state.inputValue}`);
    //send the values to state
    this.setState({
      inputValue: finalValue,
      preCalcValue: 0,
      operator: null
    })
  }

  //function to reset the calculator
  resetCalc = () => {
    this.setState({
      inputValue: 0,
      preCalcValue:0,
      operator: null
    })
  }

  render() {
    return (
      //Container for the calculator
      <div className="calculatorContainer">
        {/* create an input for the calculator */}
        <CalculatorInput
          value={this.state.inputValue}
        />
        <div className="buttonsContainer">
          <div className="buttonsContainer-sub buttonsContainerNumbers">
            <Button clickFunction={this.storeValue} value={1}/>
            <Button clickFunction={this.storeValue} value={2}/>
            <Button clickFunction={this.storeValue} value={3}/>
            <Button clickFunction={this.storeValue} value={4}/>
            <Button clickFunction={this.storeValue} value={5}/>
            <Button clickFunction={this.storeValue} value={6}/>
            <Button clickFunction={this.storeValue} value={7}/>
            <Button clickFunction={this.storeValue} value={8}/>
            <Button clickFunction={this.storeValue} value={9}/>
            <Button clickFunction={this.storeValue} value={0}/>
          </div>
          <div className="buttonsContainer-sub buttonsContainerOperators">
            <Button clickFunction={this.resetCalc} half={true} value="c"/>
            <Button clickFunction={this.calculateValue} half={true} value="="/>
            <Button clickFunction={this.storeCalc} half={true} value="-"/>
            <Button clickFunction={this.storeCalc} half={true} value="+"/>
            <Button clickFunction={this.storeCalc} half={true} value="x"/>
            <Button clickFunction={this.storeCalc} half={true} value="/"/>
            {/* <Button storeValue={this.storeValue} value="="/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorContainer;
