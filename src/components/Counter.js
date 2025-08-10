import React, { useState } from 'react';

const Counter = ({ onAddToList }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const handleAdd = () => {
    if (count > 0) {
      onAddToList(count);
      setCount(0);
    }
  };

  return (
    <div className="card">
      <h2 className="card-header">Counter</h2>
      <div className="counter-controls">
        <button className="btn-circle" onClick={decrement} disabled={count === 0}>-</button>
        <span className="counter-value">{count}</span>
        <button className="btn-circle" onClick={increment}>+</button>
      </div>
      <button className="btn-primary" onClick={handleAdd} disabled={count === 0}>
        Add to List
      </button>
    </div>
  );
};

export default Counter;
