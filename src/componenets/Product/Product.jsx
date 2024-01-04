/** @format */

import React from "react";
import "./Product.css";
import { useStateValue } from "../../stateProvider";
const Product = ({ id, title, price, rating, image }) => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            items: {
                image: image,
                id: id,
                title: title,
                price: price,
                rating: rating,
            },
        });
    };
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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;
