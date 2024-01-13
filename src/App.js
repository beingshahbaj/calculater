
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  let [result, setResult] = useState("");
  const [res, resSet] = useState("")
  const [color , setColor] = useState("")

  function handleInputChange(e, setter) {
    const value = e.target.value;
    setter(value);
  }
function add() {
  if (num1 === "" || num2 === "") {
    setResult("Both numbers are required for addition");
    resSet("Error !");
    setColor("red");
  } else {
    setResult(Number(num1) + Number(num2));
    resSet("Success");
    setColor("green");
  }
}


  function subtract() {
  if (num1 === "" || num2 === "") {
    setResult("Both numbers are required for addition");
    resSet("Error !");
    setColor("red");
  } else {
    setResult(Number(num1) - Number(num2));
    resSet("Success");
    setColor("green");
  }
  }

  function multiply() {
   if (num1 === "" || num2 === "") {
     setResult("Both numbers are required for addition");
     resSet("Error !");
     setColor("red");
   } else {
     setResult(Number(num1) * Number(num2));
     resSet("Success");
     setColor("green");
   }
  }

  function divide() {
    if (num1 === "" || num2 === "") {
      setResult("Both numbers are required for addition");
      resSet("Error !");
      setColor("red");
    } else {
      setResult(Number(num1) / Number(num2));
      resSet("Success");
      setColor("green");
    }
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
        <h3 style={{ color: color }}>{res}</h3>

        <span id="result">{result}</span>
      </p>
    </div>
  );
}

export default App;
