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
