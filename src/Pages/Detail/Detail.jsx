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
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";



let obj = {
     SIZE: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "XXXL",
    ],
    CHILDREN:[
        "1 month",
        "2 month",
        "3 month",
        "3-6 month",
        "6-9 month",
        "1 year",
        "1,5 year",
        "2 year",
        "3 year",
        "4 year",
        "5 year",
        "6 year",
        "7 year",
        "8 year",
        "9 year",
        "10 year",
        "11 year",
        "12 year",
    ]
}
let colors ={
    color:[
        "alizarin",
        "amaranth",
        "amber",
        "amethyst",
        "apricot",
        "aqua",
        "aquamarine",
        "asparagus",
        "auburn",
        "azure",
        "beige",
        "bistre",
        "black",
        "blue",
       " blue-green",
       " blue-violet",
      "  bondi-blue",
       " brass",
        "bronze",
        "brown",
        "buff",
        "burgundy",
        "camouflage-green",
        "caput-mortuum",
        "cardinal",
        "carmine",
        "carrot-orange",
        "celadon",
        "cerise",
        "cerulean",
        "champagne",
        "charcoal",
        "chartreuse",
        "cherry-blossom-pink",
        "chestnut",
        "chocolate",
        "cinnabar",
        "cinnamon",
        "cobalt",
        "copper",
        "coral",
        "corn",
        "cornflower",
        "cream",
        "crimson",
        "cyan",
        "dandelion",
        "denim",
        "ecru",
        "emerald",
        "eggplant",
        "falu-red",
        "fern-green",
        "firebrick",
        "flax",
        "forest-green",
        "french-rose",
        "fuchsia",
       " gamboge",
        "gold",
        "goldenrod",
        "green",
        "grey",
       " han-purple",
       " harlequin",
       " heliotrope",
        "hollywood-cerise",
        "indigo",
        "ivory",
        "jade",
        "kelly-green",
        "khaki",
        "lavender",
        "lawn-green",
       " lemon",
        "lemon-chiffon",
        "lilac",
       " lime",
        "lime-green",
       " linen",
        "magenta",
        "magnolia",
        "malachite",
        "maroon",
        "mauve",
        "midnight-blue",
        "mint-green",
        "misty-rose",
        "moss-green",
        "mustard",
        "myrtle",
        "navajo-white",
        "navy-blue",
       " ochre",
        "office-green",
        "olive",
        "olivine",
        "orange",
        "orchid",
       " papaya-whip",
        "peach",
        "pear",
        "periwinkle",
        "persimmon",
        "pine-green",
        "pink",
        "platinum",
        "plum",
        "powder-blue",
        "puce",
        "prussian-blue",
        "psychedelic-purple",
       " pumpkin",
       " purple",
        "quartz-grey",
        "raw-umber",
        "razzmatazz",
        "red",
       " robin-egg-blue",
        "rose",
        "royal-blue",
        "royal-purple",
       " ruby",
        "russet",
       " rust",
       " safety-orange",
       " saffron",
        "salmon",
        "sandy-brown",
        "sangria",
        "sapphire",
       " scarlet",
        "school-bus-yellow",
        "sea-green",
        "seashell",
      "  sepia",
        "shamrock-green",
        "shocking-pink",
        "silver",
        "sky-blue",
        "slate-grey",
        "smalt",
        "spring-bud",
        "spring-green",
       " steel-blue",
       " tan",
       " tangerine",
        "taupe",
        "teal",
       " tenné-(tawny)",
        "terra-cotta",
        "thistle",
        "titanium-white",
        "tomato",
        "turquoise",
        "tyrian-purple",
        "ultramarine",
        "van-dyke-brown",
       " vermilion",
       " violet",
        "viridian",
      "  wheat",
        "white",
        "wisteria",
        "yellow",
        "zucchini",
    ]
}




const Detail = () => {
    const {addOrder} = useOrder()
    const {read} = useSneakers()
    const {addToCard, like} = useLike()
    const [list, setList] = useState({})
    const [deta, setDeta] = useState(false)
    const [size, setSize] = useState("")
    const [sdel, setSdel] = useState(false)


    console.log(colors.color.length);
    

    function Size(el){
         obj.SIZE.find(elem=> setSize(elem === el))
    }
    
    console.log(size)




    // const [like, setLike]= useState( false)
const id =  useParams()
console.log(id)






let Snike = async ()=> {
    let {data} = await axios(`http://localhost:3000/data/${id.id}`)
    setList(data)
}






function handleLike(id){
    let oneSneakers = read.filter(el=> el.id === id)
    if(like.map(el=> el.id !== oneSneakers[0].id)){

        addToCard(oneSneakers[0])
    }else{
        return alert("have to element")
    }
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

}

// function deleteDetail(id){
//  read.map(el=>el.id !== id)
// }

// function handlePatch(id){
   
//     let oneSneakers = read.filter(el=> el.id === id)
    
//             addToCard(oneSneakers[0])
//     console.log(oneSneakers[0]);

// }


// function Colors(){
//     for(let i = 0; i<colors.color.length; i++ ){
//     setTimeout(()=>{
//         return colors.color[i]
//     },2000)
//        }

// }








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
            <div className="tittle">
            <h1>{`${list.title}`}</h1>
            <h3>{` ${list.color}`}</h3>
            <h2>{` ${list.price}`}</h2>
           
            <div className="block_button">
            <button onClick={()=>handleLike(list.id)}>{<SlLike style={{background: "none" }} />}</button>
            <button onClick={()=>handleOrder(list.id)}>{<SlBasket style={{background: "none"}} />}</button>
            <button >{<HiSave style={{background: "none"}} />}</button>
            </div>
            </div>
            
            </div>
           <div className="block_divs">
           <div style={{width: "200px", height: deta ? "200px" : "30px"}} className="components_mm">
            <h1 style={{display: "flex", gap: "100px"}}>DETAIL <button style={{background: "none", border: "none"}} onClick={()=>setDeta(!deta)}>{deta?  <SlArrowUp />: <SlArrowDown /> }</button></h1>
            <p style={{display: deta ? "block" : "none"}}>{`model: ${list.model}`}</p>
            <p style={{display: deta ? "block" : "none"}}>{`material: ${list.material}`}</p>
            <p style={{display: deta ? "block" : "none"}}>{`season: ${list.season}`}</p>
            <p style={{display: deta ? "block" : "none"}}>{`state: ${list.state}`}</p>
            </div>
            <div className="sizes">
            <div className="children">
                <input value={size} type="text"  placeholder="size"  /><button onClick={()=>setSdel(!sdel)} className="button1">dfd</button>
                <div  className="size">
                <h1>CHILDREN</h1>
               <div  className="btn">
               {
                    obj.CHILDREN.map(el=>(
                        <button onClick={()=>setSize(el)} >{el}</button>
                    ))
                }
               </div>
                <h1>person</h1>
                <div className="btn">
                {
                    obj.SIZE.map(el=>(
                            <button onClick={()=>setSize(el)}>{el}</button>
                    ))
                } 

                </div>
                </div>
            </div>
            
            
            </div>
           </div>
          
            </div>
        </div>
            <div className="colors">
                <h1>Color</h1>
                <div className="color">
                {
                    // Colors()
                }
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