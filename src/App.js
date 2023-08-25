import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number + number2);

  function addtotal() {
    setTotal(number + number2);
  }
  function subtotal() {
    setTotal(number - number2);
  }
  function multotal() {
    setTotal(number * number2);
  }
  function divtotal() {
    setTotal(number / number2);
  }

  return (
    <div className="App">
      <div className="input-numbers">
        <h1>{total}</h1>
        <input
          type="number"
          placeholder=""
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
        <input
          type="number"
          placeholder=""
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>
      <button onClick={addtotal}>ADD</button>
      <button onClick={subtotal}>SUBTRACT</button>
      <button onClick={multotal}>MULTILPLY</button>
      <button onClick={divtotal}>DIVIDE</button>
    </div>
  );
}
