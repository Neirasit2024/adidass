import React, { useEffect } from 'react';
import "./like.css"
import { SlLike } from "react-icons/sl";
import { useLike } from '../../context/LikeContext';

const Like = () => {
    const {like, readLike, deleteLike} = useLike()
    console.log(like);

    useEffect(()=>{readLike()}, [])

    return (
        <section id='like'>
            <div className="container">
                <h1>ALL LIKE {like.length}</h1>
                <div className="likes">
                {
                    like.map((el)=>(
                        <div className='like'>
                            <img src={el.image} alt="" />
                            <div className="like_text">
                            <h1>{el.title}</h1>
                            <p>{el.price}</p>
                            <button onClick={()=>deleteLike(el.id)}><SlLike /></button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    );
};

export default Like;