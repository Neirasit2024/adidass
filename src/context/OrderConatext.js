import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { ORDER } from '../APIs';


const orderContext = createContext()
export const useOrder = ()=> useContext(orderContext)
const OrderContext = ({children}) => {
    const [order, setOrder] = useState([])

    async function addOrder(oneSneakers){
        await axios.post(ORDER, oneSneakers)
    }

    async function readOrder(){
        let {data} = await axios(ORDER)
        setOrder(data)
    }

    async function deleteOrder(id){
        await axios.delete(`${ORDER}/${id}`)
        readOrder()
    }

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