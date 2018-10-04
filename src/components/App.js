import React from 'react';

import Screen from './Screen';
import ButtonsList from './ButtonsList';

import appendDigitToNumber from './helperFunctions/appendDigitToNumber';
import performOperation from './helperFunctions/performOperations';
import appendDecimal from './helperFunctions/appendDecimal';
import appendDigitAfterDecimal from './helperFunctions/appendDigitAfterDecimal';
import insertValueToExpr from './helperFunctions/insertValueToExpr';

import keyBindings from './keyBindings/keyBindings';


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

    this.div;  // used to focus the whole calculator at start or when the calc is clicked

    this.handleClick = this.handleClick.bind(this);
    this.calcResult = this.calcResult.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.div.focus();
  }

  componentDidUpdate() {
    this.div.focus();
  }

  render() {
    return (
      <div 
        className="app"
        onKeyDown={(e) => this.handleKeyPress(e)}
        tabIndex="0"
        ref={el => this.div = el}
      >
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

  handleKeyPress(e) {
    
    let key = keyBindings[e.key];
    if (key) {
      if (key === "=") {
        this.calcResult()
      } else if (key === "AC") {
        this.clearAll();
      } else {
        this.handleClick(key);
      }
    }
  }

  handleClick (value) {
    let display;   

    // display is what's displayed below the expression
    // while this.state.result is used to store the result of last calculation. 

    if (typeof value === "number" && this.state.display.length <= 13) {  // a number was clicked

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
      
      } else if (typeof value === "string") {   // means value is an operator
        let expr = this.state.expression.slice();
        let display = this.state.display;
        // console.log("expr: ", expr);
        // console.log('display: ', display);
        expr = insertValueToExpr(expr, display, value);
        this.setState(() => ({ expression: expr, display: "0" }))
      }
    }
  }

  calcResult () {
    let temp = insertValueToExpr(this.state.expression.slice(), this.state.display);
    let result = performOperation(temp, 'multiplyAndDivide');
    result = performOperation(result, 'addAndSubtract');
    this.setState(() => ({ expression: [], display: result[0].toString(), result: result[0], currentState: "equals" }))
  }

  clearAll() {
    this.setState(() => ({ expression: [], result: null, display: '0', currentState: "input"}));
  }

}

export default App;