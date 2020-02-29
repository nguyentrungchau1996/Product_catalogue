// Actions
import { FETCH_PRODUCTS } from "../Action/ActionType";

let initialState = {
    productsList: []
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            const draftState = {...state};
            
            draftState.productsList = action.payload;
            state = {...draftState};

            return state;

        default: 
            return state;
    }
}

export default ProductReducer;