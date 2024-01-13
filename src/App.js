
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function handleInputChange(e, setter) {
    const value = e.target.value;
    setter(value);
  }

  function add() {
    setResult(Number(num1) + Number(num2));
  }

  function subtract() {
    setResult(Number(num1) - Number(num2));
  }

  function multiply() {
    setResult(Number(num1) * Number(num2));
  }

  function divide() {
    setResult(Number(num1) / Number(num2));
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <input
        className="input-1"
        type="number"
        placeholder="num 1"
        value={num1}
        onChange={(e) => handleInputChange(e, setNum1)}
      ></input>
      <input
        className="input-2"
        type="number"
        placeholder="num 2"
        value={num2}
        onChange={(e) => handleInputChange(e, setNum2)}
      ></input>

      <div className="buttons">
        <button onClick={add}>
          <b>+</b>
        </button>
        <button onClick={subtract}>
          <b>-</b>
        </button>
        <button onClick={multiply}>
          <b>*</b>
        </button>
        <button onClick={divide}>
          <b>/</b>
        </button>
      </div>

      <p>
        <span id="result">{result}</span>
      </p>
    </div>
  );
}

export default App;
