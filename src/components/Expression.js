import React from 'react';
import makeExpression from './helperFunctions/makeExpression';

const Expression = ({ expression }) => {
  return (
    <div className="expression">
      { makeExpression(expression) }
    </div>
  );
}

export default Expression;