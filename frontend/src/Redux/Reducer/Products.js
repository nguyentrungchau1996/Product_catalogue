// ACTIONS
import { FETCH_PRODUCTS } from "../Action/ActionType";

let initialState = {
    productsList: []
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            state.productsList = action.payload;
            return {...state};

        default: 
            return state;
    }
}

export default ProductReducer;