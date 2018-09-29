import React from 'react';
import Expression from './Expression';
import Result from './Result';


const Screen = ({ expression }) => {
  return (
    <div className="screen">
      <Expression expression={expression}/>
      <Result />
    </div>
  );
}

export default Screen;