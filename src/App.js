import React, { Component } from 'react';
import Circle from './component/Circle';

export default class App extends Component {
  state = {
    x: [],
    y: [],
    r: 2,
  };
  getXYR = () => {
    var x = [];
    var y = [];
    for (let i = 0; i < 5; i++) {
      x = [...x, Math.floor(Math.random() * 600)];
      y = [...y, Math.floor(Math.random() * 600)];
    }
    this.setState({
      x: x,
      y: y,
    });
  };
  render() {
    const { x, y, r } = this.state;
    return (
      <div className="container">
        <button className="btn btn-red" onClick={this.getXYR}>
          Play
        </button>
        <div className="center">
          <Circle x={x} y={y} r={r} />
        </div>
      </div>
    );
  }
}
