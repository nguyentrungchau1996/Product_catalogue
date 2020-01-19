// Libraries
import {combineReducers} from 'redux';

// Reducers
import ProductReducer from './Products';

const rootReducer = combineReducers({
    products: ProductReducer
});

export default rootReducer;