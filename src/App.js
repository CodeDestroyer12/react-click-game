import React, { useState, useRef } from 'react';
import Circle from './component/Circle';

export default function App() {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [r, setR] = useState(20);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  // const [gameOpen, setGameOpen] = useState(false);

  const ref = useRef();

  const rand = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
  };

  const spacedRandArray = (from, to, inc, amount) => {
    const retArray = [rand(from, to)]; // sets the first element
    let temp = null;

    for (let i = 0; i < amount - 1; i++) {
      do {
        temp = rand(from, to);
      } while (Math.abs(temp - retArray[i]) <= inc);

      retArray.push(temp);
    }

    return retArray;
  };

  // const randomSpacedIntervalV1 = (min, max, count, spacing) => {
  //   let available = max - min - spacing * (count - 1);
  //   if (available < 0) return;

  //   const arr = [];
  //   for (var i = 0; i < count; i++) {
  //     var temp = Math.round(((Math.random() * available) / (count - 1)) * 2);
  //     arr[i] = i == 0 ? min + temp : arr[i - 1] + temp + spacing;
  //     available -= temp;
  //   }
  //   console.log(arr);
  //   return arr;
  // };

  const setxy = () => {
    // getXYR(ref.current.clientWidth, ref.current.clientHeight);
    // randomSpacedIntervalV1(40, ref.current.clientHeight, 5, 100);
    // setY(randomSpacedIntervalV1(40, ref.current.clientHeight, 5, 50));
    // setX(randomSpacedIntervalV1(40, ref.current.clientWidth, 5, 50));
    setY(spacedRandArray(50, ref.current.clientHeight - 50, 200, 5));
    setX(spacedRandArray(50, ref.current.clientWidth - 50, 200, 5));
    setStart(true);
  };

  return (
    <div className="container">
      {!start ? (
        <div className="center" ref={ref}>
          <h1>click on ascending order</h1>
          <button className="btn btn-red" onClick={() => setxy()}>
            Play
          </button>
        </div>
      ) : !gameOver ? (
        <div className="center">
          {console.log(x, y)}
          <Circle x={x} y={y} r={r} setGameOver={setGameOver} />
        </div>
      ) : (
        <div className="center">
          <h1>You Lose</h1>
        </div>
      )}
    </div>
  );
}
