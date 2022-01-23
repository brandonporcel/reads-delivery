import {
	ADD_TO_CART,
	DELETE_ONE_FROM_CART,
	DELETE_ALL_FROM_CART,
	CLEAR_CART,
} from '../types';

export const initialState = {
	products: [
		{ id: 1, name: 'Producto 1', price: 100 },
		{ id: 2, name: 'Producto 2', price: 200 },
	],
	cart: [],
};
export function shoppingReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			return true;
		}
		case DELETE_ONE_FROM_CART: {
			return false;
		}
		case DELETE_ALL_FROM_CART: {
			return true;
		}
		case CLEAR_CART: {
			return true;
		}
		default:
			return state;
	}
}
