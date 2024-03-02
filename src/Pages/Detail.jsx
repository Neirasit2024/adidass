import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSneakers } from '../context/SaveContext';

const Detail = () => {
    const {read, readSneakers} = useSneakers()
    const [detail, setDetail] = useState([])
    const id  = useParams()
     let sneakers = read.find(el=> el.id === id)
     setDetail(sneakers)
     console.log(detail)

    useEffect(()=>{readSneakers()}, [])
    return (
            <div>
        {
              detail.map(el=>(
                <div className="div">
                    <img src={el.image} alt="" />
                    <p>{el.price}</p>
                </div>
            ))
        }
            </div>
    );
};

export default Detail;