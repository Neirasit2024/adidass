import { SlLike } from "react-icons/sl";
import "./detail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SlBasket } from "react-icons/sl";
import { HiSave } from "react-icons/hi";
import { useLike } from "../../context/LikeContext"
import { useSneakers } from "../../context/SaveContext";
import { useOrder } from "../../context/OrderConatext";




const Detail = () => {
    const {addOrder} = useOrder()
    const {read} = useSneakers()
    const {addToCard} = useLike()
    const [list, setList] = useState({})
    // const [like, setLike]= useState( false)
const id =  useParams()
console.log(id)

let Snike = async ()=> {
    let {data} = await axios(`http://localhost:3000/data/${id.id}`)
    setList(data)
}
function handleLike(id){
   
    let oneSneakers = read.filter(el=> el.id === id)
    
            addToCard(oneSneakers[0])
    console.log(oneSneakers[0]);
//     if(order.find(el=>el.id !== oneSneakers[0].id)){
//     }else{
//         return alert("have element")
//     }
}

function handleOrder(id){
   
    let oneSneakers = read.filter(el=> el.id === id)
    
            addOrder(oneSneakers[0])
    console.log(oneSneakers[0]);
//     if(order.find(el=>el.id !== oneSneakers[0].id)){
//     }else{
//         return alert("have element")
//     }
}

function handleOrder(id){
   
    let oneSneakers = read.filter(el=> el.id === id)
    
            addToCard(oneSneakers[0])
    console.log(oneSneakers[0]);

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
            <h3>{`color: ${list.color}`}</h3>
            <h2>{`price: ${list.price}`}</h2>
           
            <div className="block_button">
            <button onClick={()=>handleLike(list.id)}>{<SlLike style={{background: "none" }} />}</button>
            <button onClick={()=>handleOrder(list.id)}>{<SlBasket style={{background: "none"}} />}</button>
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