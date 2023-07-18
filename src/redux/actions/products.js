import { apiGet } from '../../utils/utils';
import { saveAllProcuts } from '../reducers/products';
import store from '../store';
const { dispatch } = store;


export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        apiGet('https://dummyjson.com/products').then((res) => {
            dispatch(saveAllProcuts(res?.products || ['dummy']));
            resolve(res);
        }).catch((error) => {
                reject(error);
            });
    });
}



