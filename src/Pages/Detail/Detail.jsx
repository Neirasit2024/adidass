import { SlLike } from "react-icons/sl";
import "./detail.css"
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import axios from "axios";
import { SlBasket } from "react-icons/sl";
import { HiSave } from "react-icons/hi";




const Detail = () => {
    const [list, setList] = useState({})
    const [like, setLike]= useState( false)
const id =  useParams()
console.log(id)

let Snike = async ()=> {
    let {data} = await axios(`http://localhost:3000/data/${id.id}`)
    setList(data)
}



useEffect(()=>{
    Snike()
}, [])
    return (
    <section id="list">
        <div className="container">
            <div className="lists">
        {
        <div className="list">
          <div className="list_block">
          <img src={list.image} alt="" />
            <div className="list_components">
            <div className="components_block">
            <h1>{`title: ${list.title}`}</h1>
            <h3>{`title: ${list.color}`}</h3>
            <h2>{`price: ${list.price}`}</h2>
           
            <div className="block_button">
            <button onClick={()=>setLike(!like)}>{<SlLike style={{background: "none" }} />}</button>
            <button>{<SlBasket style={{background: "none"}} />}</button>
            <button>{<HiSave style={{background: "none"}} />}</button>
            </div>
            </div>
            <div className="components_mm">
            <h1>{`model: ${list.model}`}</h1>
            <h1>{`material: ${list.material}`}</h1>
            <h1>{`season: ${list.season}`}</h1>
            <h1>{`state: ${list.state}`}</h1>
            <h1>{`size: ${list.size}`}</h1>
            </div>
            </div>
          </div>
        </div>
           
        }
            </div>
        </div>
    </section>
    );
};

export default Detail;