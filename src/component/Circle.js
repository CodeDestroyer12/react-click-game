import React from 'react';

export default function Circle({ x, y, r }) {
  return (
    <>
      {/* {cir} */}
      <svg className="play-area">
        {x.map((x, i) => (
          <g key={i} onClick={() => console.log('you clicked me')}>
            <circle cx={x} cy={y[i]} r={30} fill="#FFFF00" />
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
