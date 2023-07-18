import * as auth from "./auth";
import * as isFirstTime from './isFirstTime';
import * as products from './products'
export default {
    ...auth,
    ...isFirstTime,
    ...products
}