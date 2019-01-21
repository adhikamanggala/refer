import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers';
import SelectProductReducer from './SelectItemReducer';


export default combineReducers ({
    auth: AuthReducers,
    selectedProduct: SelectProductReducer
});