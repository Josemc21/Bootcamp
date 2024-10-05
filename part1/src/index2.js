import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = (props) => {
  const [counterValue, updateCounter] = useState(0);

  /*
    const counter = useState(0);
    const counterValue = counter[0];
    const updateCounter = counter[1];
    */

  const handleClick = (e) => {
    const action = e.target.name; // obtenemos el nombre del botón

    if (action === "increment") {
      updateCounter(counterValue + 1);
    } else if (action === "decrement") {
      updateCounter(counterValue - 1);
    }
  };

  const handleClickReset = () => {
    updateCounter(0);
  };

  const isEven = counterValue % 2 === 0;
  const EvenMessage = isEven ? "Counter is even" : "Counter is odd";

  return (
    <div>
      <p>Counter value is:</p>
      <h1>{counterValue}</h1>
      <p>{EvenMessage}</p>
      <button name="increment" onClick={handleClick}>
        Increment
      </button>
      <button name="decrement" onClick={handleClick}>
        Decrement
      </button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

root.render(<App />);
