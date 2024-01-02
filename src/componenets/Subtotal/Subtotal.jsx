/** @format */

import React from "react";
// import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
const Subtotal = () => {
    return (
        <div className='subtotal'>
            <div>
                <p>
                    Subtotal (0 items): <strong>0</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' />
                    This order contains a gift
                </small>
            </div>
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;
