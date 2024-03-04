import React, { useState } from 'react';
import "./save.css"
import { useSneakers } from '../../context/SaveContext';


const Save = () => {
const { read} = useSneakers()



const [image, setImage]= useState("")
const [title, setTitle]= useState("")
const [model, setModel]= useState("")
const [season, setSeason]= useState("")
const [material, setMaterial]= useState("")
const [state, setState]= useState("")
const [price, setPrice]= useState("")
const [color, setColor]= useState("")
const [size, setSize]= useState("")
const [persentage, setPersentage] = useState("")


read.map(el=> {
    setImage(el.image)
    setModel(el.model)
    setSeason(el.season)
    setTitle(el.title)
    setState(el.state)
    setMaterial(el.material)
    setColor(el.color)
    setPrice(el.price)
    setSize(el.size)
})

function handleSneakers(){


    // read.map(el=>{
    //     let newObj ={
    //     image: el.image,
    //     title: el.title,
    //     model: el.model,
    //     season: el.season,
    //     material: el.material,
    //     state: el.state,
    //     price: el.price,
    //     color: el.color,
    //     size: el.size
    //     }
    // })
    // // createSneakers(obj)
    // setImage("")
    // setModel("")
    // setSeason("")
    // setTitle("")
    // setState("")
    // setMaterial("")
    // setColor("")
    // setPrice("")
    // setSize("")

}


return (
    <section id='save'>
       <div className="container">
        <div className="save">
            <h1>ADIDASS</h1>
          <div className="save_tops">
          <div className="save_img">
                <input onChange={(e)=>setImage(e.target.value)} value={image} type="text" placeholder='img ...'/>
            </div>
            <div className="save_input">
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='name ...'/>
                <input onChange={(e)=>setModel(e.target.value)} value={model} type="text" placeholder='model ...'/>
                <input onChange={(e)=>setSeason(e.target.value)} value={season} type="text" placeholder='season ...'/>
                <input onChange={(e)=>setMaterial(e.target.value)} value={material} type="text" placeholder='material ...'/>
                <input onChange={(e)=>setState(e.target.value)} value={state} type="text" placeholder='state ...'/>
                <div className="save_input_pcs">
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

export default Save;