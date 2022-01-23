import { combineReducers } from 'redux';
import { shoppingReducer } from './shopping.reducer';
const reducer = combineReducers({
	shopping: shoppingReducer,
});
export default reducer;
