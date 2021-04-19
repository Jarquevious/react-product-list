import React from 'react'
import React from 'react'
import { categoriesUnique } from '../../data.js';

export default function Products(props) {
    const { setCategory } = props
    // a list of buttons 
    const display_cat = categoriesUnique.map((item, productCount) => {
        return (
            <button
                className="button"
                key={productCount}
                onClick={() => {
                    setCategory(item)

                }}
            >{item}
            </button>
            
        )
    })
    return (
        <div>
            {display_cat}
        </div>
    )
}