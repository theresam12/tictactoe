import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  <button onclick = "function()"
  render() {
    return (
      <div className="board">
        <div className="row">
          <div className="square" id="one"> one </div>
          <div className="square" id="two"> two </div>
          <div className="square" id="three"> three </div>
        </div>
        <div className="row">
          <div className="square" id="4"> four </div>
          <div className="square" id="5"> five </div>
          <div className="square" id="6"> six </div>
        </div>
        <div className="row">
          <div className="square" id="7"> seven </div>
          <div className="square" id="8"> eight </div>
          <div className="square" id="9"> nine </div>
        </div>
      </div>
    );
  }
}

export default App;
