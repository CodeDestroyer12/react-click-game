import React, { useState } from 'react';
import Timer from './Timer';

export default function Circle({ x, y, r, setGameStatus }) {
  const [a, setA] = useState(1);
  const [gClass, setGClass] = useState();
  const [timerOut, setTimerOut] = useState(false);

  const checkNum = (e, i) => {
    if (i + 1 === a) {
      setA(a + 1);
      setGClass(i + 1);
      if (a >= 5) {
        setA(1);
        setGameStatus('win');
      }
    } else if (i + 1 <= a) {
      console.log('YOU CLICKED THAT');
    } else {
      setA(1);
      setGameStatus('lose');
    }
  };
  return (
    <>
      <span className="top-left">Level 1</span>
      <Timer count={10} setGameStatus={setGameStatus} />
      <svg className="play-area">
        {x.map((x, i) => (
          <g className="ball" key={i} onClick={(e) => checkNum(e, i)}>
            <circle
              className={`crl  ${i + 1 <= gClass ? 'clicked' : 'unclicked'}`}
              cx={x}
              cy={y[i]}
              r={r}
              fill="#FFFF00"
            />
            <text
              className="unselect"
              x={x}
              y={y[i]}
              textAnchor="middle"
              stroke="#51c5cf"
              strokeWidth="2px"
              dy=".3em"
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </>
  );
}
