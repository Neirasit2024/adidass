import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/home';
import Life from '../Pages/Life/life';
import Sale from '../Pages/Sale/sale';
import Kids from '../Pages/Kids/kids';
import Women from '../Pages/Women/women';
import Men from '../Pages/Men/men';
import Basket from '../Pages/Basket/basket';
import Like from '../Pages/Like/like';
import Admin from '../Pages/Admin/admin';
import Detail from '../Pages/Detail';

const RoutesPages = () => {
    const PAGES = [
        {path: "/home", element: <Home/>, key: 1},
        {path: "/men", element: <Men/>, key: 2},
        {path: "/women", element: <Women/>, key: 3},
        {path: "/kids", element: <Kids/>, key: 4},
        {path: "/sale", element: <Sale/>, key: 5},
        {path: "/life", element: <Life/>, key: 6},
        {path: "/detail/:id", element: <Detail/>, key: 6},
        
    ]
    const PAGES_BUTTONS = [
        {path: "/admin", element: <Admin/>, key: 1},
        {path: "/like", element: <Like/>, key: 2},
        {path: "/basket", element: <Basket/>, key: 3},

    ]
    return (
        <Routes>
            {
                PAGES.map((el)=>(
                    <Route path={el.path} element={el.element} key={el.key}/>
                ))
            }
            {
                PAGES_BUTTONS.map((el)=>(
                    <Route path={el.path} element={el.element} key={el.key}/>
                ))
            }
        </Routes>
    );
};

export default RoutesPages;