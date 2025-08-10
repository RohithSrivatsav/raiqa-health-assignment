import React from 'react';

const ListView = ({ numbers, onSort, onReset, sortOrder }) => {
  return (
    <div className="card list-section">
      <div className="list-header">
        <h3>Numbers List</h3>
        {numbers.length > 0 && (
          <div className="list-controls">
            <button onClick={onSort}>
              Sort {sortOrder === 'asc' ? '↓' : '↑'}
            </button>
            <button className="btn-reset" onClick={onReset}>Reset</button>
          </div>
        )}
      </div>

      {numbers.length > 0 ? (
        <ul className="number-list">
          {numbers.map((num, index) => (
            <li key={index} className="list-item">
              <span>{num}</span>
              <span>#{index + 1}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">Your list is empty. Add a number from the counter!</p>
      )}
    </div>
  );
};

export default ListView;
