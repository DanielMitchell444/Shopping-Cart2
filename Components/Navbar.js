import React from "react";
import logo from '../Assets/dogecoin-doge-logo (1).png'
import {Link} from 'react-router-dom'
const Navbar = () => {
 return(
 <nav class = "nav">
 <div class = "logo">
 <Link className="list" to = "/">
 <img src = {logo} class = "logo" />
 </Link>
 </div>
 <ul class = "menu">
  <li className = "list">
   <Link to = "/">Home</Link>
  </li>
  <li className="list">
   <Link to = "/shopping">Shopping</Link>
  </li>
  <li className="list">
    <Link to = "/cart">Cart</Link>
  </li>

 </ul>
 </nav>
 )
}

export default Navbar;