import React, {Component, Fragment} from 'react';
import Logic from '../models/Logic';
import Board from '../components/Board';

class GameContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      players: ["X", "O"],
      board: [ null, null, null, null, null, null, null, null, null],
    }
  }

  render(){
    return (
      <Fragment>
      <h1>Noughts and Crosses</h1>
      <Board/>
      </Fragment>
    );
  }
}

export default GameContainer;
