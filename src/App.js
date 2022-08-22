import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Cart from './Components/Cart';
import Product from './Components/Product';


function App() {
  const { product } = product;
  
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Inventory product={product}></Inventory>
        <div className="card">
          <Product product={product}></Product>
        </div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
