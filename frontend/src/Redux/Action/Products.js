// Actions
import { FETCH_PRODUCTS } from "./ActionType";

// Services
import ProductsService from "../../services/Products";

// Async action
export const fetchProducts = () => {
  return dispatch => {
    ProductsService.fetchProducts()
      .then(res => {
          console.log('res', res);
        dispatch(actFetchProducts(res.data));
      })
      .catch(console.log);
  };
};

// Action creators
export const actFetchProducts = data => ({
  type: FETCH_PRODUCTS,
  payload: data
});
