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
   try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setData(data);

   } catch(error) {
    console.log(error);
   }
   }
   fetchData();
   }, [])

   const addItem = (product) => {
    const data = product.filter(data => data.id === product);
    setData([...product, data]);
   }
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<HomePage />} />
        <Route exact path = "/shopping"  element = {
        <Shopping 
        data = {data}
        />} 
        />
        <Route exact path = "/Cart" element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
