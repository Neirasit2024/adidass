import React, { useState } from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import { CgAdidas } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";
import { HiSaveAs } from "react-icons/hi";
import { useLike } from '../../context/LikeContext';
import { useSelector } from 'react-redux';



export const Header = () => {
    const balance = useSelector(state => state.balance)
    const [display, setDisplay] = useState(false)
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
                        <div style={{display: display ? "flex" : "none", gap: "10px", flexDirection: "column", zIndex: "1"}}  className="balance">
                            <p>cash: {balance}</p>
                            <p>expensess: {}</p>
                        </div>
                        <button onClick={()=>setDisplay(!display)}>bl && ex</button>
                    </div>
                </div>
            </div>
            {/* <p className='length'>{order.length}</p> */}
        </header>
    );
};
