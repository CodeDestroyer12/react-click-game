import React, { Component } from 'react';
import Circle from './component/Circle';
import './App.css';

export default class App extends Component {
  state = {
    x: [],
    y: [],
    r: null,
  };
  getXYR = () => {
    var x = [];
    var y = [];
    for (let i = 0; i < 5; i++) {
      x = [...x, Math.floor(Math.random() * 300)];
      y = [...y, Math.floor(Math.random() * 300)];
    }
    this.setState({
      x: x,
      y: y,
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.getXYR}>Play</button>

        <Circle xy={this.state} />
      </div>
    );
  }
}
