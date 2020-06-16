import {REMOTE_ITEM,UPDATE_ITEM,LOAD_ITEMS} from './CartActionTypes'


export const RemoveItem=(item)=>{
return{
    type:REMOTE_ITEM,
    payload:item
}
}

export const UpdateItem=(item)=>{
    return{
        type:UPDATE_ITEM,
        payload:item
    }
}
export const LoadItems=()=>{
    return{
        type:LOAD_ITEMS
    }
} 