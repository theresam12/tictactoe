import React, { Component } from 'react';
import Header from './Header.js'
import logo from './logo.svg';
import './App.css';

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
    // update click counter
    var player
    var newGameBoard = this.state.gameBoard
    var count = this.state.counter + 1
    this.setState({counter: count})
    console.log(this.state);
    if(count%2 == 0) {
      player = "X"
  }
      else {
      player = "0"
  }
    newGameBoard[e.target.id] = player
    this.setState({gameBoard: newGameBoard})
    // use that counter to decide odd or even for "X" or "O"
  }



    // Make the square that was clicked show the correct mark

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
