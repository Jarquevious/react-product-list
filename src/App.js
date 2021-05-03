import data, { categoriesUnique, productCount } from "./data";
import React, { useState } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import shoppingCart from './shoppingCartPage'


categoriesUnique.push("all");

function App() {
  const [category, setCategory] = useState("all");

  return (
    <div className="App">
      <Router>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/" exact component={ShoppingPage} />
      </Router>
      <Navbar />
      <div className="App-header">
        {categoriesUnique.map((category) => {
          return (
            <button
              size="sm"
              variant="secondary"
              className="category-button"
              key={productCount}
              onClick={() => {
                setCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="blue">
        <h1>{category}</h1>
      </div>
      <div className="Products">
        {data
          .filter((item) => {
            return item.category === category || category === "all";
          })
          .map((data) => {
            return (
              <div className="product">
                <Card className="Card">
                  <h1>{data.name} </h1>
                  <h2>{data.category}</h2>
                  <h3>{data.price}</h3>
                </Card>
              </div>
            );
          })}
      </div>

      <data />
      <Footer />
    </div>
  );
}

export default App;
