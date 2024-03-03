import React, { useEffect } from 'react';
import "./basket.css"
import { useOrder } from '../../context/OrderConatext';
import { useNavigate } from 'react-router-dom';
const Basket = () => {
    const navigate = useNavigate()
 const {order, readOrder} = useOrder()
 useEffect(()=>{readOrder()}, [])
    return (
        <section id='basket'>
            <div className="container">
                <div className="basket">
                    {
                        order.map(el=> (
                            <div  className='order'>
                                <img src={el.image} alt="" />
                                <div className="order_information">
                                <h1>{el.title}</h1>
                                <p>{el.size}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Basket;