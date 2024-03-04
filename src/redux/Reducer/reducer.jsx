const inilitState = {
    cash: 0
}

export const reducer =(state = inilitState, action)=>{
switch(action.type){
    case "ADD_PLUS":
        return {...state, cash: state.cash + action.payload }
    case "ADD_MINUS":
        return {...state, cash: state.cash > 1 ? state.cash - action.payload : state.cash }

    default: 
    return state
}
} 