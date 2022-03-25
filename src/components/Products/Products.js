import React from 'react';
import './Products.css'
const Products = (props) => {

    const { id, name, price, img } = props.product
    return (
        <div>
            <div className="product-container">
                <div className='product-img-con'>
                    <img src={img} alt="headset" className='product-img' />
                </div>

            </div>


            {/* <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <img src={img} alt=""/> */}
        </div>
    );
};

export default Products;