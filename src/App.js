import data, {  categoriesUnique } from './data'
import React from 'react';
// categoriesWithCounts,, productCount 
import './App.css';
  

function App() {
  return (
    <div className="App">
      <div className="App-header" >
      { categoriesUnique.map((category) => {
    
    return <button>{category}</button>
      })}

        <button></button> 
      </div>
    
      <data />
    </div>
  );
}

export default App;
