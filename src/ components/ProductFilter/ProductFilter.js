import React from 'react'
import data from '../../data.js';

export default function ProductFilter(props) {

    const { category } = props

    const display_cat = data.filter((item, index) => {
        return item.category === category || category === "All"

    }).map((item, index) => {
        return (
            <div key={index}>
                <h1> {item.name} </h1> 
                <h2>{item.rating} ⭐</h2>
                <h2>{item.price}</h2>
                <p>{item.description}</p>
                <p> Category: {item.category} </p>
                <h4>Units: {item.units}</h4>
            </div>
        )
    })
    return (
        <div className="Product">
            {display_cat}
        </div>
    )
}
