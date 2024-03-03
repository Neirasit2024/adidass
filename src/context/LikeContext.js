import React, { createContext, useContext, useState } from 'react';
import { LIKE, ORDER } from '../APIs';
import axios from 'axios';

const likeContext = createContext()
export const useLike = ()=> useContext(likeContext)

const LikeContext = ({children}) => {
    const [like, setLike] = useState([])

    async function addToCard(oneSneakers){
        await axios.post(LIKE, oneSneakers)

    }

    async function readLike(){
        let {data} = await axios.get(LIKE)
        setLike(data);
    }
    console.log(like)

    async function deleteLike(id){
        await axios.delete(`${LIKE}/${id}`)
        readLike()
    }


    const values = {
    addToCard,
    deleteLike,
    readLike,
    setLike,
    like
    }
    return (
        <likeContext.Provider value={values}>
            {children}
        </likeContext.Provider>
    );
};

export default LikeContext;