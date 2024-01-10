/** @format */

import "./App.css";
import Checkout from "./componenets/Checkout/Checkout";
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componenets/Login/Login";

function App() {
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
