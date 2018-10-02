import React from 'react';
import Expression from './Expression';
import Result from './Result';


const Screen = ({ expression, display }) => {
  return (
    <div className="screen">
      <Expression expression={expression}/>
      <Result display={display}/>
    </div>
  );
}

export default Screen;