/** @format */

import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
    return (
        <div className='header'>
            <img
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon-logo-image'
            />
            <div className='header__search'>
                <input type='text' className='header__search--input' />
                {/* searchicon */}
                <SearchIcon className="header__search--icon"/>
            </div>
            <div className='header__nav'>
                <div className='header__nav--option'>
                    <span className='option--one'>HelloGuest</span>
                    <span className='option--two'>Sign in</span>
                </div>
                <div className='header__nav--option'>
                    <span className='option--one'>Returns</span>
                    <span className='option--two'>&Orders</span>
                </div>
                <div className='header__nav--option'>
                    <span className='option--one'>Your</span>
                    <span className='option--two'>Prime</span>
                </div>

                <div className='header__nav--icons'>
                    {/* bascket icons */}
                    <ShoppingBasketIcon />
                    <span className='basket--item'>0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
