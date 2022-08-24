export const Add = (item) =>{
    return{
        type:"ADD_CART",
        payload:item
    }
} 

export const Delete = (id) =>{
    return{
        type:"REMOVE_CART",
        payload:id
    }
} 

export const Dec = (item) =>{
    return{
        type:"DLT_DEC",
        payload:item
    }
} 