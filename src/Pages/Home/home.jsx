import React, { useEffect } from 'react';
import "./home.css"
import { useSneakers } from '../../context/SaveContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const {read, readSneakers, deleteDetail} = useSneakers()
    const navigate = useNavigate()
   useEffect(()=>{readSneakers()},[])
    
    return (
        <section id='home'>
            <div className="container">
                <div className="home">
                    {
                        read.map(el=>(
                                <div  className="card">
                                <img onClick={()=>navigate(`/detail/${el.id}`)}  src={el.image} alt="" />
                                <h2 >{el.title} </h2> 
                                <h4>{el.fake}</h4>

                                <div className="card_text">
                                <p>{el.price}$ </p>

                                <button onClick={()=>deleteDetail(el.id)}>delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;