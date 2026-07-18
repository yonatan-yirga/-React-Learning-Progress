import { useState } from 'react';
import './Count.css';

function Count() {
  const [count, setCount] = useState(0);
  const addnumber = () => {
    setCount(count + 2);
  };
  const number = () => {
    setCount(0);
  };

  return (
    <div className="count-container">
      <div className="count-display">{count}</div>
      <button className="count-button" onClick={addnumber}>Add</button>
      <button className="count-button reset" onClick={number}>Reset</button>
    </div>
  );
}

export default Count