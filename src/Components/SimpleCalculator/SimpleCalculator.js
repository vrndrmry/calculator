import React from "react";
import './simpleCalculator.css'

export default function SimpleCalculator() {
  return (
    <div className="standardCalculatorDiv">
    
      <table>

        <tbody>
        <tr>
        <td colSpan={4}>0</td>
        </tr>
          <tr>
            <td>%</td>
            <td>CE</td>
            <td>C</td>
            <td>&#11013;</td>
          </tr>
          <tr>
            <td>1/x</td>
            <td>x&sup2;</td>
            <td>&radic;x</td>
            <td>&divide;</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>&#215;</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>_</td>
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
