import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <div className='navbarDiv'>
    <h1>Calculator App</h1>
    <select>
      <option value="standard">Standard</option>
      <option value="scientific">Scientfic</option>
      <option value="dateCalculation">Date Calculation</option>
      <option value="speed">Speed</option>
      <option value="simple">Simple Calculator</option>
    </select>
    </div>
  )
}
