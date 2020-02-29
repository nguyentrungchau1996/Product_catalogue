// Actions
import { FETCH_PRODUCTS } from "./ActionType";

// Action creators
export const actFetchProducts = data => ({
  type: FETCH_PRODUCTS,
  payload: data
});
