const initialState={
    cartItems:[],
    loading: false,
    error:null,
}

const cartItems=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_CARTITEMS_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,
            }
        case "FETCH_CARTITEMS_SUCCESS":
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }  
        case "FETCH_CARTITEMS_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
        default :
        return state;       
    }
}

export default cartItems;