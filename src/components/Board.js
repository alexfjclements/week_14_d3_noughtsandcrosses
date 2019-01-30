import React, {Component, Fragment} from 'react';
import Square from './Square';
// import GameContainer from '../containers/GameContainer';

class Board extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const squares = this.props.board.map((square, i) => {
      return (
        <Square
          key = {i}
          i = {i}
          handlePlayerMove = {
            this.props.handlePlayerMove
          }
          value = {square}
        />
      );
    })

    return(
      <>
        { squares }
      </>
    );
  }
}

export default Board;
