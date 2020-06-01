import React, { useState, useRef, useEffect } from 'react';

export default function Circle() {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [r, setR] = useState(20);

  const ref = useRef();
  const rand = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
  };
  const spacedRandArray = (from, to, inc, amount) => {
    var retArray = [rand(from, to)]; // sets the first element
    var temp = null;

    for (var x = 0; x < amount - 1; x++) {
      do {
        temp = rand(from, to);
      } while (Math.abs(temp - retArray[x]) <= inc);

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

  useEffect(() => {
    // getXYR(ref.current.clientWidth, ref.current.clientHeight);
    // randomSpacedIntervalV1(40, ref.current.clientHeight, 5, 100);
    // setY(randomSpacedIntervalV1(40, ref.current.clientHeight, 5, 50));
    // setX(randomSpacedIntervalV1(40, ref.current.clientWidth, 5, 50));
    setY(spacedRandArray(50, ref.current.clientHeight - 50, 50, 5));
    setX(spacedRandArray(50, ref.current.clientWidth - 50, 50, 5));
  }, []);

  return (
    <>
      <svg className="play-area" ref={ref}>
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
