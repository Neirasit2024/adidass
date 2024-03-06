import React, { useState } from 'react';
import "./admin.css"
import { useSneakers } from '../../context/SaveContext';


let types = [
    "MEN", 
    "WOMEN", 
    "KIDS", 
]
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
    const [type, setType] = useState("")
    const [genus, setGenus] = useState("")
    const [fake, setFake] = useState("")
    const  [br, setBr] = useState(false)

    function handleSneakers(){
        let obj ={
            image, 
            title, 
            model, 
            season, 
            material, 
            state, 
            genus,
            price, 
            color, 
            fake,
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
        setGenus("")
        setFake("")

      
    }
   const  chanch =(e)=>{
    let price1 = e.target.value

    setPrice(parseFloat(price1))
    // setPrice(price1)

   }


    return (
        <section id='admin'>
           <div className="container">
            <div className="admin">
                <h1>ADIDASS</h1>
              <div className="admin_tops">
                <div className="img_price">
                <div className="admin_img">
                    <input onChange={(e)=>setImage(e.target.value)} value={image} type="text" placeholder='img ...'/>
                    
                </div>
                <div className="admin_input_pcs">
                    <input maxLength={3} onChange={(e)=>chanch(e)} value={price} type="text" placeholder='price ...'/>
                    <input onChange={(e)=>setColor(e.target.value)} value={color} type="text" placeholder='color ...'/>
                    <input onChange={(e)=>setType(e.target.value)} value={type}  type="text" />

                    </div>
                </div>
                <div className="admin_input">
                    <input  onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='name ...'/>
                    <input onChange={(e)=>setModel(e.target.value)} value={model} type="text" placeholder='model  ...'/>
                    <input onChange={(e)=>setSeason(e.target.value)} value={season} type="text" placeholder='season ...'/>
                    <input onChange={(e)=>setMaterial(e.target.value)} value={material} type="text" placeholder='material ...'/>
                    <input  onChange={(e)=>setState(e.target.value)} value={state} type="text" placeholder='state ...'/>
                    <input  onChange={(e)=>setState(e.target.value)} value={state} type="text" placeholder='fake ...'/>
                    <input  onChange={(e)=>setGenus(e.target.value)} value={genus} type="text" placeholder='genus ...'/>
                    
                   
              </div>
                </div>
                <button onClick={handleSneakers}>create</button>
            </div>
           </div> 
        </section>
    );
};

export default Admin;