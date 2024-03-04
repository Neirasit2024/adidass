import React, { useEffect } from 'react';
import "./basket.css"
import { useOrder } from '../../context/OrderConatext';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Basket = () => {
    const state = useSelector(state=> state.cash)
    const dispatch = useDispatch()
 const {order, readOrder,deleteOrder} = useOrder()
 useEffect(()=>{readOrder()}, [])
    return (
        <section id='basket'>
            <div className="container">
                <div className="basket">
                    {
                        order.map(el=> (
                            <div  className='order'>
                                <div className="div">
                                <img src={el.image} alt="" />
                                <div className="order_information">
                                <h1>{el.title }</h1>
                                <p>{el.size}</p>
                                <h1>{ el.price * state}$</h1>
                                </div>

                                </div>
                            
                            <div className="order_buttons">
                                <button onClick={()=>deleteOrder(el.id)} className='delete'>delete</button>
                                <div className="button_plMi">
                                    <button className='plus' onClick={()=>dispatch({type: "ADD_PLUS" , payload: 1})}>+</button>
                                    <p>{state}</p>
                                    <butto className='minus' onClick={()=>dispatch({type: "ADD_MINUS", payload: 1})}>-</butto>
                                </div>
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