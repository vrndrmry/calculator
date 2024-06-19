import React, { useState } from "react";
import "./simpleCalculator.css";

export default function SimpleCalculator() {
  const [input, setInput] = useState("50++++");
  const [result, setResult] = useState(0);

  const handleInput = (input) => {
    console.log(input);
  };
  const clearFunction = () => {
    setInput(0);
  };
  const stepClearFunction=()=>{

      setInput(input.slice(0, -1));
    
  }
  const inverseCalculate=()=>{
    setInput(1/input)
  }
  const squareCalculate=()=>{
    setInput(input**2)
  }
  return (
    <div className="standardCalculatorDiv">
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>{input}</td>
          </tr>
          <tr>
            <td colSpan={"4".toString()}>Result: {result}</td>
          </tr>
          <tr>
            <td>%</td>
            <td onClick={stepClearFunction}>CE</td>
            <td onClick={clearFunction}>C</td>
            <td>&#11013;</td>
          </tr>
          <tr>
            <td onClick={inverseCalculate}>1/x</td>
            <td onClick={squareCalculate}>x&sup2;</td>
            <td>&radic;x</td>
            <td>&divide;</td>
          </tr>
          <tr>
            <td onClick={() => handleInput(7)}>7</td>
            <td>8</td>
            <td>9</td>
            <td>&#215;</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td>+/-</td>
            <td>0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
