import './App.css';
import VendingMachine from "./VendingMachine.js"
import Coke from "./Coke.js"
import Snickers from "./Snickers.js"
import Chips from "./Chips.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="/coke" element={<Coke />}/>
          <Route path="/snickers" element={<Snickers />}/>
          <Route path="/chips" element={<Chips />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
