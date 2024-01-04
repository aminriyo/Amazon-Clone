/** @format */

import React from "react";
import "./CheckProduct.css";
import { useStateValue } from "../../stateProvider";
const CheckProduct = (id, image, title, price, rating) => {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <div className='checkproduct'>
            <img
                className='checkproduct__image'
                src={image}
                alt='product image'
            />

            <div className='checkproduct__info'>
                <p className='checkproduct__title'>{title}</p>
                <p className='checkproduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkproduct__rating'>
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))}
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckProduct;
