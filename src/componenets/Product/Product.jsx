/** @format */

import React from "react";
import "./Product.css";
const Product = ({ id, title, price, rating, image }) => {
    return (
        <div className='product'>
            {/* product  */}
            <div className='product__info'>
                <p>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* rating info  */}
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt='product image' />
            <button>Add to Basket</button>
        </div>
    );
};

export default Product;
