import React, { useEffect } from 'react';
import "./home.css"
import { useSneakers } from '../../context/SaveContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const {read, readSneakers} = useSneakers()
    const navigate = 
    useNavigate()
   useEffect(()=>{readSneakers()},[])
    
    return (
        <section id='home'>
            <div className="container">
                <div className="home">
                    {
                        read.map(el=>(
                                <div onClick={()=>navigate(`/id ${el.id}`)}  className="card">
                                <img src={el.image} alt="" />
                                <h3 style={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    {el.title} <p>{el.price}</p></h3>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;