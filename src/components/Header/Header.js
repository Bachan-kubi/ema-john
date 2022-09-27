import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <h3 className='heading'>Food<span>Shop</span></h3>
            <nav>
                <a href="./home">Home</a>
                <a href="./shop">Shop</a>
                <a href="./contact">Contact</a>
                <a href="./about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;