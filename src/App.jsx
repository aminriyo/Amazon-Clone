/** @format */

import "./App.css";
import Checkout from "./componenets/Checkout/Checkout";
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            </Router>
        </div>
    );
}

export default App;
