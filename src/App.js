import React, { useState, useRef, useEffect } from 'react';
import Circle from './component/Circle';

export default function App() {
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <div className="container">
      {!gameOpen ? (
        <>
          <button className="btn btn-red" onClick={() => setGameOpen(true)}>
            Play
          </button>
        </>
      ) : (
        <div className="center">
          <Circle />
        </div>
      )}
    </div>
  );
}
