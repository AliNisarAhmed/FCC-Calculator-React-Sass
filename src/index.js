import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.js';

import "./styles/styles.scss";

// **** Architecture ****

// App
  // Screen
    // Expression
    // Result
  // Body
    // ButtonsList
      // 17x Button

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// TODO

  // Add Keyboard functionality  **DONE
  // Dot functionality to be seperated, and check for some weird bug when entering "." on an answer
  // when expression is very long, it should wrap to new line, and keep doing so.
  // When an operator is clicked first, and then an expression is entered, results in a crash.  ** DONE
  // crashed when "=" is pressed at start
  // support for -ve numbers at the beginning of an expression to be added.