import { productApi } from "../services/productsApi";

const prodObj = new productApi();

const fetchAllProducts = ()=> async (dispatch)=> {
    dispatch(requestProducts())
    try {
         const postData = await prodObj.getAllProducts()
         /* const = await response.json(); */
         dispatch({type: "FETCH_PRODUCTS_SUCCESS", payload: postData});
    }  
    
    catch (error) {
        dispatch({type:"FETCH_PRODUCTS_FAILURE", payload:error});        
    }
}

const requestProducts = ()=>{
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

// eslint-disable-next-line
export default{
    fetchAllProducts
}