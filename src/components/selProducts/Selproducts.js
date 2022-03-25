import React from 'react';
import './Selproducts.css'

const Selproducts = (props) => {
    const { name } = props.product;

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Selproducts;