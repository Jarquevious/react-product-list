import './App.css';
import data from './data';
import React, { useState } from 'react';
import Product from './components/Product/Product'
import ProductFilter from './components/ProductFilter/ProductFilter';


function App() {
  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <data />
    </div>
  );
}

export default App;
