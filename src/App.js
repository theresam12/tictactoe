import React, { Component } from 'react';
import Header from './Header.js'
import logo from './logo.svg';
import './App.css';



function findWin(board) {
  // all possible winning solutions
  var winningCombos = [
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[0,4,9],[3,5,7]
  ]

  // if every index of a winning solution belongs to one playerl they win
for(let i = 0; i < winningCombos.length; i++){

}


  //if(board[])

  return
    alert("You are the winner!")
}


class App extends Component {
  // use state to track the number of clicks
  constructor(props){
    super(props)
    this.state = {
      counter:0,
      gameBoard:["", "", "", "", "", "", "", "", ""]
    }
  }

  listItem = (e) => {
    var player
    const newGameBoard = this.state.gameBoard
    // var newGameBoard = this.state.gameBoard

    // use a counter to decide odd or even for "X" or "O"
    var count = this.state.counter + 1
    this.setState({counter: count})

    // Make the square that was clicked show the correct mark
    // console.log(this.state);


    if(count%2==0) {
      player = "X"
    } else {
      player = "0"
    }

    newGameBoard[e.target.id] = player
    this.setState({gameBoard: newGameBoard})

    findWin(newGameBoard)

  }

  render() {
    return (
      <main>
        <Header onclick="" message="Welcome"  subtitle="To Tic-Tac-Toe"/>
        <div className="board">
          <div className="row">
            <div className="square" id="0" onClick={this.listItem}> {this.state.gameBoard[0]} </div>
            <div className="square" id="1" onClick={this.listItem}> {this.state.gameBoard[1]} </div>
            <div className="square" id="2" onClick={this.listItem}> {this.state.gameBoard[2]} </div>
          </div>
          <div className="row">
            <div className="square" id="3" onClick={this.listItem}> {this.state.gameBoard[3]} </div>
            <div className="square" id="4" onClick={this.listItem}> {this.state.gameBoard[4]} </div>
            <div className="square" id="5" onClick={this.listItem}> {this.state.gameBoard[5]} </div>
          </div>
          <div className="row">
            <div className="square" id="6" onClick={this.listItem}> {this.state.gameBoard[6]} </div>
            <div className="square" id="7" onClick={this.listItem}> {this.state.gameBoard[7]} </div>
            <div className="square" id="8" onClick={this.listItem}> {this.state.gameBoard[8]} </div>
          </div>
        </div>
      </main>
    );
  }
}


export default App;
