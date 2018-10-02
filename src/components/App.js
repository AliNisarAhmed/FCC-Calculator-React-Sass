import React from 'react';

import Screen from './Screen';
import ButtonsList from './ButtonsList';

import appendDigitToNumber from './helperFunctions/appendDigitToNumber';
import performOperation from './helperFunctions/performOperations';
import appendDecimal from './helperFunctions/appendDecimal';
import appendDigitAfterDecimal from './helperFunctions/appendDigitAfterDecimal';
import insertValueToExpr from './helperFunctions/insertValueToExpr';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: [],
      display: "0",
      result: null,
      currentState: "enter",  // Different states of the calc (1)input (2) equals
      decimal: 'false',
    };

    this.handleClick = this.handleClick.bind(this);
    this.calcResult = this.calcResult.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Screen 
          expression={this.state.expression}
          display={this.state.display}
          currentState={this.state.currentState}
          />
        <ButtonsList 
          handleClick={this.handleClick}
          calcResult={this.calcResult}
          clearAll={this.clearAll}
        />
      </div>
    );
  }

  handleClick (value) {
    let display;   

    // display is what's displayed below the expression
    // while this.state.result is used to store the result of last calculation. 

    if (typeof value === "number") {  // a number was clicked

      if (this.state.currentState === 'equals') {   // if the calc is in equals mode i.e. it just perforemd a calculation
        this.setState(() => ({ display: '', currentState: 'input' }))
      }

      if (value === 0 && this.state.display === "0") {  // This stops displaying multiple initial zeroes
        return null;
      }

      this.setState((prevState) => {
        if (prevState.display === "0") {
          return { display: value.toString() };
        } else {
          return { display: prevState.display + value.toString() };
        }
      });      

    } else {

      if (value === ".") {  // a dot is clicked
        
        display = this.state.display;

        if (!display.includes(".")) {  // if there's nothing in display, or what's in display does not include a dot
          display += value;
          this.setState(() => ({ display }));
        }
      
      } else {   // means value is an operator
        let expr = this.state.expression.slice();
        let display = this.state.display;
        // console.log("expr: ", expr);
        // console.log('display: ', display);
        expr = insertValueToExpr(expr, display, value);
        this.setState(() => ({ expression: expr, display: "0" }))
      }
    }
  }

  calcResult (value) {
    let temp = insertValueToExpr(this.state.expression.slice(), this.state.display);
    // console.log(temp);
    let result = performOperation(temp, 'multiplyAndDivide');
    result = performOperation(result, 'addAndSubtract');
    // console.log('result', result);
    this.setState(() => ({ expression: [], display: result[0].toString(), result: result[0], currentState: "equals" }))
  }

  clearAll() {
    this.setState(() => ({ expression: [], result: null, display: '0', currentState: "input"}));
  }

}

export default App;