import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js/Navbar";
import SimpleCalculator from "./Components/SimpleCalculator/SimpleCalculator";
import Header from "./Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<SimpleCalculator />}></Route>
      </Route>
      
    </Routes>
    
  );
}

export default App;
