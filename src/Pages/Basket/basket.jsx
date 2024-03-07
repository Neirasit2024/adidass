import React, { useEffect } from 'react';
import "./basket.css"
import { useOrder } from '../../context/OrderConatext';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





const Basket = () => {
    const navigate = useNavigate()
    const state = useSelector(state=> state.cash)
    const dispatch = useDispatch()
 const {order, readOrder,deleteOrder} = useOrder()
 function handlePlus(itemId){
    order.map(el=>{
        dispatch({type: "ADD_BALANC_MINUS", payload: el.price *state})


    })
    dispatch({type: "ADD_PLUS", payload: {itemId, quantity:1}})
 }

 function handleMinus(itemId){
    order.map(el=>{
        dispatch({type: "ADD_BALANC_PLUS", payload:  el.price })
    })
    dispatch({type: "ADD_MINUS", payload: {itemId, quantity: 1}})
 }

 



 useEffect(()=>{readOrder()}, [])
    return (
        <section id='basket'>
            <div className="container">
                <div className="basket">
                    {
                        order.map((el )=> (
                            <div  className='order'>
                                <div className="div">
                                <img onClick={()=>navigate(`/detail/${el.id}`)} src={el.image} alt="" />
                                <div className="order_information">
                                <h1>{el.title }</h1>
                                <p>{el.size}</p>
                                <h1 >{ el.price * state}$</h1>
                                {/* {
                                    dispatch({type: "ADD_BALANCE", payload: el.price})
                                } */}
                                </div>

                                </div>
                            
                            <div className="order_buttons">
                                <button onClick={()=>deleteOrder(el.id)} className='delete'>delete</button>
                                <div className="button_plMi">
                                    <button className='plus' onClick={()=>handlePlus(el.id)}>+</button>
                                    <p>{state}</p>
                                    <butto className='minus' onClick={()=>handleMinus(el.id)}>-</butto>
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