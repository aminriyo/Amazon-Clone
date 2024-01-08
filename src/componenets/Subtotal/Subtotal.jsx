/** @format */

import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../stateProvider";
import CurrencyFormat from "react-currency-format";
import { Navigate } from "react-router-dom";
const Subtotal = () => {
    const [{ basket }] = useStateValue();
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={(e) => Navigate("/payment")}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Subtotal;
