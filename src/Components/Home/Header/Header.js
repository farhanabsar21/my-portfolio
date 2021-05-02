import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./Header.css";
import HeaderMain from './HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="Header py-3">
            <div className="container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;