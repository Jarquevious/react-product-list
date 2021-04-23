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

      <div>
        { data.map((data) => {
          return (
          <div>
            <h1>{ data.name } </h1>
            <h2>{ data.category }</h2>
            <h3>{ data.price }</h3>

          </div>
        )})} 
      </div>
      
    
        <button></button> 
      </div>
    
      <data />
    </div>
  );
}

export default App;
