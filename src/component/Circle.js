import React, { useState } from 'react';

let a = 1;
export default function Circle({ x, y, r, setGameOver }) {
  const [gClass, setGClass] = useState();

  const checkNum = (e, i) => {
    if (i + 1 === a) {
      console.log(a);
      a += 1;
      setGClass(i + 1);
    } else if (i + 1 <= a) {
      console.log('already clicked', a);
    } else {
      console.log('you lose', a);
      setGameOver(true);
    }
  };
  return (
    <>
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
