import React, {Component, Fragment} from 'react';

const Square = (props) => {
  return (
    <button id={props.i} className="square" onClick={props.handlePlayerMove}>{props.value}</button>
  );
}

export default Square;
