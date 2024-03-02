import React, { useState } from 'react';
import "./admin.css"
import { useSneakers } from '../../context/SaveContext';
const Admin = () => {
    const {createSneakers}  = useSneakers()

    const [image, setImage]= useState("")
    const [title, setTitle]= useState("")
    const [model, setModel]= useState("")
    const [season, setSeason]= useState("")
    const [material, setMaterial]= useState("")
    const [state, setState]= useState("")
    const [price, setPrice]= useState("")
    const [color, setColor]= useState("")
    const [size, setSize]= useState("")

    function handleSneakers(){
        let obj ={
            image, 
            title, 
            model, 
            season, 
            material, 
            state, 
            price, 
            color, 
            size
        }
        createSneakers(obj)
        setImage("")
        setModel("")
        setSeason("")
        setTitle("")
        setState("")
        setMaterial("")
        setColor("")
        setPrice("")
        setSize("")

    }


    return (
        <section id='admin'>
           <div className="container">
            <div className="admin">
                <h1>ADIDASS</h1>
              <div className="admin_tops">
              <div className="admin_img">
                    <input onChange={(e)=>setImage(e.target.value)} value={image} type="text" placeholder='img ...'/>
                </div>
                <div className="admin_input">
                    <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='name ...'/>
                    <input onChange={(e)=>setModel(e.target.value)} value={model} type="text" placeholder='model ...'/>
                    <input onChange={(e)=>setSeason(e.target.value)} value={season} type="text" placeholder='season ...'/>
                    <input onChange={(e)=>setMaterial(e.target.value)} value={material} type="text" placeholder='material ...'/>
                    <input onChange={(e)=>setState(e.target.value)} value={state} type="text" placeholder='state ...'/>
                    <div className="admin_input_pcs">
                    <input onChange={(e)=>setPrice(e.target.value)} value={price} type="text" placeholder='price ...'/>
                    <input onChange={(e)=>setColor(e.target.value)} value={color} type="text" placeholder='color ...'/>
                    <input onChange={(e)=>setSize(e.target.value)} value={size} type="text" placeholder='size ...'/>
                    </div>
              </div>
                </div>
                <button onClick={handleSneakers}>create</button>
            </div>
           </div> 
        </section>
    );
};

export default Admin;