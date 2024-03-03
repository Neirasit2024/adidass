import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SaveContext from './context/SaveContext';
import LikeContext from "./context/LikeContext"
import OrderContext from './context/OrderConatext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <SaveContext>
    <LikeContext>
    <OrderContext>

    <App />
    </OrderContext>
    </LikeContext>
    </SaveContext>
    </BrowserRouter>
);
