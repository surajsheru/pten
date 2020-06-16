import {REMOTE_ITEM,UPDATE_ITEM,LOAD_ITEMS} from './CartActionTypes'
import data from '../data/Cartdata'
 const clist=data.products  
const Products={
    items:clist,
    eitem:{}
}
console.log(Products.items)

export const CartReducer=(state=Products,action)=>{
       //console.log(data)

       switch (action.type) {
           case REMOTE_ITEM:
           
             return{
                   ...state,
                   items:state.items.filter(item=>item.p_id!==action.payload.p_id)
                   
               }               
            case UPDATE_ITEM:
                console.log(action.payload)
                return{
                    ...state,
                    eitem:action.payload
                }   
            case LOAD_ITEMS:
                return state
           default:
               return {...state}
       }
} 
export default CartReducer