import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    } 
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };

  return (
    <div className="App">
      <div className="header"></div>
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img 
        className="samosa" 
        src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png" 
        alt="Samosa" 
        onClick={updateCount}
      />
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed</h3>
          <p>Double Stuffed upgrade</p>
          <button onClick={buyDoubleStuffed}>Cost: 10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack</h3>
          <p>Party Pack</p>
          <button onClick={buyPartyPack}>Cost: 100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast</h3>
          <p>Full Feast</p>
          <button onClick={buyFullFeast}>Cost: 1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App
