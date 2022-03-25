import React from 'react';
import Selproducts from '../selProducts/Selproducts';
import './Selected.css'

const Selected = (props) => {

    const { selectedProduct, randomButton, chooseAgain } = props
    return (
        <div>

            <h1>Selected items</h1>
            <hr />
            {
                selectedProduct.map(selpro => <Selproducts key={selpro.id} product={selpro} products={selectedProduct}></Selproducts>)
            }
            <button className='random-btn' onClick={randomButton}>Pick one for me</button>
            <button className='random-btn choose-btn' onClick={chooseAgain}>Choose Again</button>
        </div>
    );
};

export default Selected;