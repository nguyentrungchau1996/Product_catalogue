// Actions
import { GET_INFO_SHOPEE_PRODUCT } from "./ActionType";

// Services
import PageInfoService from '../../services/PageInfo';

// Async actions
export const getInfoShopeeProduct = (shopid, itemid) => {
    return (dispatch) => {
        console.log('shopid', shopid);
        console.log('itemid', itemid);

        PageInfoService.getInfoShopeeProduct(shopid, itemid).then(res => {
            console.log('res', res);
            dispatch(actGetInfoShopeeProduct(res.data));
        }).catch(console.log);
    }
}

// Action creators
export const actGetInfoShopeeProduct = (data) => ({
    type: GET_INFO_SHOPEE_PRODUCT,   
    payload: data
});
