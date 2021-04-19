import './App.css';
import data from './data';
import React, { useState } from 'react';
import Product from './src/components/Product'
import ProductFilter from './src/components/ProductFilter';


function App() {
  const [category, setCategory] = useState('All');

  const display_category = categoriesUnique.map((item) => {
    return (
        <button
            className="button-items"
            onClick={() => {
                setCategory(item)

            }}
        >{item}
        </button>
    )
})

  return (
    <div className="App">
      <button
          className="button"
          category={'All'}
          onClick={() => 
            { setCategory('All') }}
            >All {data.length}
     </button>
     <Product category={category} setCategory={setCategory} />
     <ProductFilter category={category} />
    </div>
  );
}

export default App;
