import React from 'react';

import './Products.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {

    const { id, name, price, img } = props.product
    return (
        <div className="product-container">

            <div className='product-img-con'>
                <img src={img} alt="headset" className='product-img' />
            </div>
            <div className="product-info">
                <h2>name: {name}</h2>
                <h3>Price: ${price}</h3>
                <button class="add-btn">Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>




            {/* <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <img src={img} alt=""/> */}
        </div>
    );
};

export default Products;