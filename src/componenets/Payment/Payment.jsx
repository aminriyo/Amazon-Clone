/** @format */

import React from "react";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import CheckProduct from "../CheckProduct/CheckProduct";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
const Payment = () => {
    const [{ basket, user }] = useStateValue();
    const Navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => amount + Number(item.price), 0);

    // states use for the button
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    // finding clientsecret
    const [clientSecret, setClientSeceret] = useState(true);

    // useeffect
    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const response = await axios({
                    method: "post",
                    withCredentials: false,
                    url: `/payments/create?total=${
                        getBasketTotal(basket) * 100
                    }`,
                });
                console.log(response);
                setClientSeceret(response.data.clientSecret);
            } catch (error) {
                console.log(error);
            }
        };
        getClientSecret();
    }, [basket]);
    console.log("the secret is >>>", clientSecret);
    // for form onsubmit
    const handleSumbit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_mehtod: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                console.log(paymentIntent);
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                Navigate("/orders");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // for  cardelement
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
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
                        <form onSubmit={handleSumbit}>
                            {/* cardelement */}
                            <CardElement onChange={handleChange} />
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
                                <button
                                    disabled={
                                        disabled || processing || succeeded
                                    }
                                >
                                    <span>
                                        {" "}
                                        {processing ? (
                                            <h3>Processing</h3>
                                        ) : (
                                            "Buy Now "
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;