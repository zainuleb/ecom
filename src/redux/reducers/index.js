import products from './products';
import cartItems from './cartItems';

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    products,cartItems
})

export default rootReducer;