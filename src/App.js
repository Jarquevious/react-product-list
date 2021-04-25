import data, { categoriesUnique } from './data'
import React, { useState } from 'react';
// categoriesWithCounts,, productCount 
import './App.css';
import Card from 'react-bootstrap/Card'
import Footer from './footer'


categoriesUnique.push('all')

function App() {
  
  const [category, setCategory] = useState('all')
  

  return (
    
    <div className="App">
      <div className="nav"><h1>Nav</h1></div>
      <div className="App-header">
        {categoriesUnique.map(( category ) => {
          return (
                <button
                  size="sm"
                  variant="secondary"
                  className="category-button"
                  onClick = { () => {
                    setCategory(category)
                  }}
          >{category}</button>
        )})}</div>
        <div className="blue">
          <h1>
            { category }
          </h1>
        </div>
          <div className="Products">
            {data.filter( (item) => {
              return item.category === category || category === 'all'
            }).map((data) => {
              return (
                <div className="product">
                  <Card className="Card">
                    <h1>{data.name} </h1>
                    <h2>{data.category}</h2>
                    <h3>{data.price}</h3> 
                  </Card>           
                </div>
            )
          })}
          
        </div>
      
      <data />
      <Footer/>
    </div>
  );
}

export default App;
