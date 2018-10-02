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

  // ** clicking "." while a result is being displayed (after clicking "=") results in error
  // ** add simultaneous calculation for x/ and +-, "first come first serve"