import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState('rgba(45, 168, 255, 1)');
  let value;
  function handleIncrement() {
    value = count + 1;
    if (value > 40) {
      return;
    }
    setCount(value);
    if (value >= 20) {
      setColor('rgba(255, 255, 0, 1)');
    }
  }
  function handleDecrement() {
    value = count - 1;
    if (value < 1) {
      return;
    }
    setCount(value);
    if (value < 20) {
      setColor('rgba(45, 168, 255, 1)');
    }
  }
  return (
    <div className="Main">
      <div className="child" style={{ backgroundColor: `${color}` }}>
        {count}°C
      </div>
      <div className="btn">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
