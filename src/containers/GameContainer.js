import React, {Component, Fragment} from 'react';
import Logic from '../models/Logic';
import Board from '../components/Board';

class GameContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      players: ["X", "O"],
      board: ["", "", "", "", "", "", "", "", ""]
    }
    this.handlePlayerMove = this.handlePlayerMove.bind(this);
    this.changeValueOfSquare = this.changeValueOfSquare.bind(this);
  }

  handlePlayerMove(event){
    const index = event.target.id;
    console.log(index);
    this.changeValueOfSquare(index);

  }

  changeValueOfSquare(index){
    console.log("Hello world");
    if (this.state.board[index] === ""){

      const updatedBoard = Array.from(this.state.board);
      updatedBoard[index] = this.state.players[0];

      const updatedPlayers = Array.from(this.state.players)
      updatedPlayers.reverse();

      this.setState({
        board: updatedBoard,
        players: updatedPlayers
      });
    }
  }

  render(){
    return (
      <Fragment>
      <h1>Noughts and Crosses</h1>
      <Board handlePlayerMove={this.handlePlayerMove} players={this.state.players} board={this.state.board}/>
      </Fragment>
    );
  }
}

export default GameContainer;
