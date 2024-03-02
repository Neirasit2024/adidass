import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../APIs';
import axios from 'axios';
const sneakersContext = createContext()
export const useSneakers  = ()=> useContext(sneakersContext)

const SaveContext = ({children}) => {
    const [read, setRead] = useState([])
    const [sneakersId, setSneakersId]=useState([])


    async function createSneakers(newSneakers){
        await axios.post(API, newSneakers)
    }


    async function readSneakers(){
      let {data} =  await axios(API)
    setRead(data)
    }

   async function detailSneakers(id){
   let {data} =  await axios(`${API}, ${id}`)
   setSneakersId(data.map((el)=>el.id))
   }
//    console.log(sneakersId);

//    useEffect(()=>{detailSneakers()}, [])


    const values = {
        createSneakers,
        readSneakers,
        read,
        sneakersId,
    }
    return (
        <sneakersContext.Provider value={values}>
            {children}
        </sneakersContext.Provider>
    );
};

export default SaveContext;