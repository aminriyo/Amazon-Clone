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
    },[]);
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
            </Router>
        </div>
    );
}

export default App;
