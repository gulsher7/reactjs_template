import { combineReducers } from 'redux';
import auth from "./auth";
import types from '../types';
import isFirstTime from './isFirstTime';
import products from './products';

const appReducer = combineReducers({
    auth,
    isFirstTime,
    products
});
const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;