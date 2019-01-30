import React, {Component} from 'react';

class Logic extends Component{

  constructor(props){
    super(props);
    this.winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  render(){

    for (let n = 0; n < 8; n++){
      console.log("hello");
      const combo = this.winCombos[n];
      console.log(this.props.board[combo[0]]);
      console.log(this.props.board[combo[1]]);
      console.log(this.props.board[combo[2]]);
      // debugger
      const firstLetter = this.props.board[combo[0]];
      const secondLetter = this.props.board[combo[1]];
      const thirdLetter = this.props.board[combo[2]];

      const answerString = firstLetter + secondLetter + thirdLetter;

      if (answerString === "XXX"){
        return "X's win!";
      } else if (answerString === "OOO"){
        return "O's win!";
      } else {
        return ("Play!");
      }
    }

  }
}
  export default Logic;
