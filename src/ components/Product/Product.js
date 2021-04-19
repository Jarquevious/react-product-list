import React from 'react'
import { categoriesUnique, productCount } from '../../data.js';

function Product(props) {
    const { setCategory } = props
    // a list of buttons 
    const display_category = categoriesUnique.map((item, productCount) => {
        return (
            <div>
                <button
                    className="button-items"
                    onClick={() => {
                        setCategory(item)

                    }}
                >{item}{productCount}
                </button>
                <button
                    category={'all'}
                    onClick={() => {
                        return setCategory('all')
                    }} />
            </div>
        )
    })
    return (
        <div>
            {display_category}
        </div>
    )
}
export default Product