/** @format */

import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import CheckProduct from "../CheckProduct/CheckProduct";
import CurrencyFormat from "react-currency-format";
import { CardElement } from "@stripe/react-stripe-js";
const Payment = () => {
    const [{ basket, user }] = useStateValue();
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => amount + Number(item.price), 0);
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to='/checkout'> {basket?.length} items</Link> )
                </h1>
                {/* payment delivery */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>1234 React lane</p>
                        <p>Baltimore,MD</p>
                    </div>
                </div>
                {/* review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item) => (
                            <CheckProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'>
                        <form>
                            {/* cardelement */}
                            <CardElement />
                            <div className='payment__price'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button>
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
