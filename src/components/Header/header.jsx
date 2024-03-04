import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import { CgAdidas } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";
import { HiSaveAs } from "react-icons/hi";
import { useLike } from '../../context/LikeContext';



export const Header = () => {
    const {order} = useLike()
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header_logo">
                        <Link to="/home"><CgAdidas /></Link>
                    </div>
                    <div className="header_pages">
                        <Link to="/men">MEN</Link>
                        <Link to=".women">WOMEN</Link>
                        <Link to="/kids">KIDS</Link>
                    </div>
                    <div className="header_search_buttons">
                        <div className="search_button">
                        <input type="text" placeholder='search product' />
                        <button><FaSearch /></button>
                        </div>
                        <Link to="/admin"><RiAdminLine /></Link>
                        <Link to="/like"><SlLike /></Link>
                        <Link to="/basket"><SlBasketLoaded /></Link>
                        <Link to="/save"><HiSaveAs /></Link>
                    </div>
                </div>
            </div>
            {/* <p className='length'>{order.length}</p> */}
        </header>
    );
};
