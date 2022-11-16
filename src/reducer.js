export const reducer = (state, action)=>{
    if(action.type === "SET"){
        return action.value;
    }
    if(action.type === "DELETE"){
        let i;
        for(i = 0; i < state.length; i++){
            if(state[i].id===action.id){
                break;
            }
        }
        const b = state.slice(0, i);
        return b.concat(state.slice(i+1));
    }

}