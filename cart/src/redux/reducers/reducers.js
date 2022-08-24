const INIT = {
    carts: []
};


export const cartReducer = (state = INIT, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((e) => e.id === action.payload.id);
            console.log(ItemIndex)
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    carts: [...state.carts,temp]
                }
            }

        case "REMOVE_CART":
            const data = state.carts.filter((e) => e.id != action.payload);
            return {
                carts: data
            }

        case "DLT_DEC":
            const DeletItem = state.carts.findIndex((e) => e.id === action.payload.id);
            if(state.carts[DeletItem].qnty >1){
                 state.carts[DeletItem].qnty -= 1
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
        default: return state
    }
}