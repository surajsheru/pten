 import { createStore } from 'redux'
import CartReducer from './Cart/CartReducer'

 const store=createStore(CartReducer)
 
 export default store;