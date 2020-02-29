import { resConnector } from "./index";

class PageInfoService {
    getInfoShopeeProduct(shopid, itemid) {
        if (shopid && itemid) {
            const params = new URLSearchParams({
                itemid,
                shopid
            });
    
            return resConnector({
                url: `https://shopee.vn/api/v2/item/get?${params}`,
                method: 'GET'
            });
        }
    }
}

export default new PageInfoService();