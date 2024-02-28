import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import { CgAdidas } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";



const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header_logo">
                        <Link to=""><CgAdidas /></Link>
                    </div>
                    <div className="header_pages">
                        <Link to="">MEN</Link>
                        <Link to="">WOMEN</Link>
                        <Link to="">KIDS</Link>
                        <Link to="">SALE</Link>
                        <Link to="">3 STRIPE LIFE</Link>
                    </div>
                    <div className="header_search_buttons">
                        <div className="search_button">
                        <input type="text" placeholder='search product' />
                        <button><FaSearch /></button>
                        </div>
                        <Link to=""><RiAdminLine /></Link>
                        <Link to=""><SlLike /></Link>
                        <Link to=""><SlBasketLoaded /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
