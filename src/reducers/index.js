import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers';
import SelectProductReducer from './SelectItemReducer';


export default combineReducers ({
    pikachu: () => 'Ryan Reynolds',
    auth: AuthReducers,
    selectedProduct: SelectProductReducer
});