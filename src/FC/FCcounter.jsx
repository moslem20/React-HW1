import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function FCcounter(){
  //אתחול
  const [counter, setCounter] = useState(new Counter());
  const [inputValue, setInputValue] = useState(); 
  const [displayValue, setDisplayValue] = useState(''); 

  //Methods
  const start = () => {
    const newCounter = new Counter()
    newCounter.Initialize(Number(inputValue));
    setCounter(newCounter);
    setDisplayValue("");
  };

  const doIncrement =() =>{
    counter.Increment();
    setInputValue(counter.value);
  };
  const doGo = () => {
    const numbers = counter.Go();
    setDisplayValue(numbers.join(', ')); // הצגת המספרים כטקסט

  };

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter</h2>
      <button onClick={doIncrement} style={{ marginRight: '10px' }}>+</button>
      <input
        type="number"
        value={inputValue}
        style={{ marginRight: '10px', width: '50px', textAlign: 'center' }}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={start} style={{ marginRight: '10px' }}>Start</button>
      <button onClick={doGo}>Go</button>
      <p style={{ marginTop: '20px' }}>{displayValue}</p>
    </div>
  );
  
}
export default FCcounter;