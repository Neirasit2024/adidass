import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../APIs';
import axios from 'axios';



const sneakersContext = createContext()
export const useSneakers  = ()=> useContext(sneakersContext)

const SaveContext = ({children}) => {
  
    const [read, setRead] = useState([])



    async function createSneakers(newSneakers){
        await axios.post(API, newSneakers)
    }


    async function readSneakers(){
      let {data} =  await axios(API)
    setRead(data)
    }

    async function editSneakers(newSneakers){
        await axios.patch(API, newSneakers)
    }

  





    const values = {
        createSneakers,
        readSneakers,
        read,
   
    }
    return (
        <sneakersContext.Provider value={values}>
            {children}
        </sneakersContext.Provider>
    );
};

export default SaveContext;