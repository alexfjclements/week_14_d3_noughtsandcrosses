import React, {Component, Fragment} from 'react';

const Square = (props) => {
  return (
    <button className="square" onClick={props.handlePlayerMove}>{props.value}</button>
  );
}

export default Square;
