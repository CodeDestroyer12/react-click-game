import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCount = count - 1;

      setCount(newCount >= 0 ? newCount : 0);
    }, 1000);

    if (count <= 0) {
      props.setGameStatus('lose');
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const format = (time) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

  return <div className="top-right">{`Timer : ${format(count)}`}</div>;
}
