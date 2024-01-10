/** @format */

import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";

const Header = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='amazon-logo-image'
                />
            </Link>
            <div className='header__search'>
                <input type='text' className='header__search--input' />
                {/* searchicon */}
                <SearchIcon className='header__search--icon' />
            </div>
            <div className='header__nav'>
                <div className='header__nav--option'>
                    <span className='option--one'>HelloGuest</span>
                    <Link to={"/login"} className="header__links">
                        <span className='option--two'>Sign in</span>
                    </Link>
                </div>
                <div className='header__nav--option'>
                    <span className='option--one'>Returns</span>
                    <span className='option--two'>&Orders</span>
                </div>
                <div className='header__nav--option'>
                    <span className='option--one'>Your</span>
                    <span className='option--two'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className='header__nav--icons'>
                        {/* bascket icons */}
                        <ShoppingBasketIcon />
                        <span className='basket--item'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
