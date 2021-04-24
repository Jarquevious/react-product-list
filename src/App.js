import data, { categoriesUnique } from './data'
import React, { useState } from 'react';
// categoriesWithCounts,, productCount 
import './App.css';

categoriesUnique.push('all')

function App() {
  
  const [category, setCategory] = useState('all')
  

  return (
    <div className="App">
      <h1>{ category }</h1>
      <div className="App-header" >
        {categoriesUnique.map(( category ) => {
          return <button
                  size="sm"
                  variant="secondary"
                  className="category-button"
                  onClick = { () => {
                    setCategory(category)
                  }}
          >{category}</button>
        })}

        <div className="Products">
          {data.filter( (item) => {
            return item.category === category || category === 'all'
          }).map((data) => {
            return (
              <div className="product">
                <h1>{data.name} </h1>
                <h2>{data.category}</h2>
                <h3>{data.price}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <data />
    </div>
  );
}

export default App;
