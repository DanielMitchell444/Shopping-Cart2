import logo from './logo.svg';
import './App.css';
import { Routes, Router, Link, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Shopping from './Components/Shopping';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data = await response.json();
    setData(data);
  }
  fetchData()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<HomePage />} />
        <Route exact path = "/shopping" 
        element = {<Shopping 
        data = {data}
        />} 
        />
        <Route exact path = "/Cart" element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
