import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { ORDER } from '../APIs';
import { useDispatch } from 'react-redux';


const orderContext = createContext()
export const useOrder = ()=> useContext(orderContext)


const OrderContext = ({children}) => {
    const dispatch = useDispatch()
    const [order, setOrder] = useState([])

    async function addOrder(oneSneakers){
        await axios.post(ORDER, oneSneakers)
    }

    async function readOrder(){
        let {data} = await axios(ORDER)
        setOrder(data)
    }

    async function deleteOrder(id){
        order.map(el=>{
            dispatch({type: "ADD_DEL_PLUS", payload: el.price})
        })
        await axios.delete(`${ORDER}/${id}`)
        readOrder()
    }

    // async function cashPlus(){
    //     await axios(ORDER).then(res=>console.log(res.price))
    // }

    const values = {
        addOrder,
        order,
        readOrder, 
        deleteOrder,
    }
    return (
        <orderContext.Provider value={values}>
            {children}
        </orderContext.Provider>
    );
};

export default OrderContext;