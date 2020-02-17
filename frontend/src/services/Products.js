import {resConnector} from './index';

class ProductsService {
    fetchProducts() {
        return resConnector({
            url: 'http://localhost:5000/api/products',
            method: 'GET'
        });
    }
}

export default new ProductsService();