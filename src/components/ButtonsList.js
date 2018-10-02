import React from 'react';

import Button from './Button';

const ButtonsList = ({ handleClick, calcResult, clearAll }) => {
  return (
    <div className="buttonsList">
      <Button handleClick={clearAll} value="AC">clear</Button>
      <Button handleClick={handleClick} value="/">divide</Button>
      <Button handleClick={handleClick} value="x">multiply</Button>      
      <Button handleClick={handleClick} value={1}>one</Button>
      <Button handleClick={handleClick} value={2}>two</Button>
      <Button handleClick={handleClick} value={3}>three</Button>
      <Button handleClick={handleClick} value="-">subtract</Button>
      <Button handleClick={handleClick} value={4}>four</Button>
      <Button handleClick={handleClick} value={5}>five</Button>
      <Button handleClick={handleClick} value={6}>six</Button>
      <Button handleClick={handleClick} value="+">add</Button>
      <Button handleClick={handleClick} value={7}>seven</Button>
      <Button handleClick={handleClick} value={8}>eight</Button>
      <Button handleClick={handleClick} value={9}>nine</Button>
      <Button handleClick={calcResult} value="=">equals</Button>
      <Button handleClick={handleClick} value={0}>zero</Button>
      <Button handleClick={handleClick} value=".">decimal</Button>
    </div>
  );
}

export default ButtonsList;
