import React from 'react'; 

const Button = ({ value, children, handleClick }) => {
  
  return (
    <button 
      className="btn" 
      id={children}
      onClick={() => handleClick(value)}
    >
      { value }
    </button>
  );
}

export default Button;