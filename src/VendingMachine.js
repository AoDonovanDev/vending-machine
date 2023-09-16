import { Link } from "react-router-dom"
import "./VendingMachine.css"

export default function VendingMachine () { 
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <Link to="/coke">coke</Link>
      <Link to="/snickers">snickers</Link>
      <Link to="/chips">chips</Link>
    </div>
  )
}