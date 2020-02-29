// Libraries
import {combineReducers} from 'redux';

// Reducers
import ProductReducer from './Products';
import PageInfoReducer from './PageInfo';

const rootReducer = combineReducers({
    products: ProductReducer,
    pageInfo: PageInfoReducer,
});

export default rootReducer;