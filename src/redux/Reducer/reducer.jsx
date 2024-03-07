import { useSneakers } from "../../context/SaveContext"

const inilitState = {
    cash: 0,
    balance: 20000,
    expensess: 0
}


export const reducer =(state = inilitState, action)=>{

switch(action.type){
    case "ADD_PLUS":
        return {...state, cash: state.cash + action.payload.quantity }
    case "ADD_MINUS":
        return {...state, cash: state.cash > 1 ? state.cash - action.payload.quantity : state.cash }
    case "ADD_BALANCE":
        return {...state, balance: state.balance - action.payload }
    case "ADD_BALANC_MINUS":
        return {...state, balance: state.balance - action.payload }
    case "ADD_BALANC_PLUS":
        return {...state, balance: state.balance + action.payload}
    case "ADD_BALANC_PLUS":
        return {...state, expensess: state.expensess + action.payload}
    case "ADD_DEL_PLUS":
        return {...state, balance: state.balance + action.payload}   
    default: 
    return state
}
} 