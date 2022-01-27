import { combineReducers } from 'redux';
import { shoppingReducer } from './shopping.reducer';
import { comingProducts } from './comingProducts.reducer';
const reducer = combineReducers({
	shopping: shoppingReducer,
	comingProducts: comingProducts,
});
export default reducer;
