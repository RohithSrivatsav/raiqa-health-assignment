import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';
import './App.css';

function App() {
  const [numberList, setNumberList] = useState(() => {
    try {
      const savedList = localStorage.getItem('myNumberList');
      return savedList ? JSON.parse(savedList) : [];
    } catch (error) {
      console.error("Failed to parse number list from localStorage", error);
      return [];
    }
  });

  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    localStorage.setItem('myNumberList', JSON.stringify(numberList));
  }, [numberList]);

  const addNumberToList = (number) => {
    if (!numberList.includes(number)) {
      const newList = [...numberList, number];
      sortAndSetList(newList, sortOrder);
    } else {
      alert("This number is already in the list!");
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    sortAndSetList(numberList, newSortOrder);
  };

  const sortAndSetList = (list, order) => {
    const sortedList = [...list].sort((a, b) => {
      return order === 'asc' ? a - b : b - a;
    });
    setNumberList(sortedList);
  };

  const handleReset = () => {
    setNumberList([]);
  };

  return (
    <div className="app-container">
      <Counter onAddToList={addNumberToList} />
      <ListView
        numbers={numberList}
        onSort={handleSort}
        onReset={handleReset}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default App;
