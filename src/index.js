import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SaveContext from './context/SaveContext';
import LikeContext from "./context/LikeContext"
import OrderContext from './context/OrderConatext';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <SaveContext>
    <LikeContext>
    <OrderContext>
    <App />
    </OrderContext>
    </LikeContext>
    </SaveContext>
    </Provider>
    </BrowserRouter>
);
