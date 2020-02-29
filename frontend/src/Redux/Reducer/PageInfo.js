// Actions
import { GET_INFO_SHOPEE_PRODUCT } from "../Action/ActionType";

let initialState = {
    pageInfo: {}
};

const PageInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INFO_SHOPEE_PRODUCT: {
            const draftState = {...state};

            draftState.pageInfo = action.payload;
            state = {...draftState};

            return state;
        };

        default: 
            return state;
    }
}

export default PageInfoReducer;