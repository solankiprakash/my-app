interface Istate{
    posts:Array<Object>
}

const initialState:Istate ={
    posts:[
        {id:"1",name:"prakash"},
        {id:"2",name:"ABC"}
    ]
}

const reducer =(state:any=initialState,action:any)=>{
    console.log(action)
    if(action.type === "ADD"){
        state={
            ...state,
            posts:[...state.posts,action.payload]
        }
    }
    console.log(state)
    return state;

}

export default reducer