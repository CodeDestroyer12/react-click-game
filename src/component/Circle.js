import React from 'react';

export default function Circle({ xy }) {
  return (
    <div>
      {/* {cir} */}
      <svg className="App">
        {xy.x.map((x, i) => (
          <g key={i} onClick={() => console.log('you clicked me')}>
            <circle cx={x} cy={xy.y[i]} r={20} fill="#FFFF00" />
            <text
              className="unselect"
              x={x}
              y={xy.y[i]}
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
    </div>
  );
}
