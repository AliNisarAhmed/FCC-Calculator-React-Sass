import React from 'react';

import Screen from './Screen';
import ButtonsList from './ButtonsList';

import appendDigitToNumber from './helperFunctions/appendDigitToNumber';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: [],
      result: null,
      mode: null,  // Different modes depending on the state of the calc (1)input (2) result
    };

    this.handleClick = this.handleClick.bind(this);
    this.calcResult = this.calcResult.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Screen 
          expression={this.state.expression}
          result={this.state.result}
          />
        <ButtonsList 
          handleClick={this.handleClick}
          
        />
      </div>
    );
  }

  handleClick (value) {
    this.setState((prevState) => {
      let expr = prevState.expression.slice();
      
      if (typeof expr[expr.length - 1] === 'number') {   // expr = [1, "+", 2]
        if (typeof value === "number") { // value = 2 => then expr should become [1, "+", 22]
          expr = appendDigitToNumber(expr, value);
        } else {  // value = "+" (any operator), => expt = [1, "+", 2, "+"]
          expr.push(value);
        }
      } else {  // expr = [1, "+", 2, "-"]
        if (typeof value === "number") {  // value = 3 => expr = [1, "+", 2, "-", 3]
          expr.push(value);
        } else {  // value = "+" => expr = [1, "+", 2, "+"]
          expr[expr.length - 1] = value;
        }
      }

      return { expression: expr };
    });
  }

  calcResult () {

  }
}

export default App;