/** @format */

import "./App.css";
import Checkout from "./componenets/Checkout/Checkout";
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componenets/Login/Login";
import { useStateValue } from "./stateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./componenets/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
    "pk_test_51OYsCbCORph7gZmACtFxk0AvxC2bhXDA3zrSKxSCi7hozZC1vHe3tYibcvsTgNZ6xYrAYzrj55TfNEG3ArzMMzTG00TgkWZCRE"
);

function App() {
    const [{}, dispatch] = useStateValue();
    // use useEffect to add  a listener for authentications state changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authuser) => {
            if (authuser) {
                // if a user is authenticated , dispatch an action and set the user
                dispatch({
                    type: "SET_USER",
                    user: authuser,
                });
            } else {
                // dispatch but not null ther user
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
        // Clean up function
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path='/checkout'
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />
                </Routes>
                {/* login page */}
                <Routes>
                    <Route
                        path='/login'
                        element={
                            <>
                                <Login />
                            </>
                        }
                    />
                </Routes>
                {/* payment page */}
                <Routes>
                    <Route
                        path='/payment'
                        element={
                            <>
                                <Header />
                                <Elements stripe={promise}>
                                    <Payment />
                                </Elements>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
