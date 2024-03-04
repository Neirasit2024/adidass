import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/home';
import Kids from '../Pages/Kids/kids';
import Women from '../Pages/Women/women';
import Men from '../Pages/Men/men';
import Basket from '../Pages/Basket/basket';
import Like from '../Pages/Like/like';
import Admin from '../Pages/Admin/admin';
import Detail from '../Pages/Detail/Detail';
import Save from '../Pages/Save/save';


const RoutesPages = () => {
    const PAGES = [
        {path: "/home", element: <Home/>, key: 1},
        {path: "/men", element: <Men/>, key: 2},
        {path: "/women", element: <Women/>, key: 3},
        {path: "/kids", element: <Kids/>, key: 4},
        {path: "/detail/:id", element: <Detail/>, key: 5},
        
    ]
    const PAGES_BUTTONS = [
        {path: "/admin", element: <Admin/>, key: 1},
        {path: "/like", element: <Like/>, key: 2},
        {path: "/basket", element: <Basket/>, key: 3},
        {path: "/save", element: <Save/>, key: 4},

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