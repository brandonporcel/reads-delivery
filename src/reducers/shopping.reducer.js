import {
	READ_PRODUCTS,
	ADD_TO_CART,
	DELETE_ONE_FROM_CART,
	DELETE_ALL_FROM_CART,
	CLEAR_CART,
} from '../types';

export const initialState = {
	products: [],
	cart: [],
};
export function shoppingReducer(state = initialState, action) {
	switch (action.type) {
		case READ_PRODUCTS: {
			return { ...state, products: action.payload.map((product) => product) };
		}
		case ADD_TO_CART: {
			const newItem = state.products.find((el) => el.id === action.payload);

			const itemInCart = state.cart.find((el) => el.id === newItem.id);

			return itemInCart
				? {
						...state,
						cart: state.cart.map((el) =>
							el.id === newItem.id ? { ...el, quantity: el.quantity + 1 } : el
						),
				  }
				: {
						...state,
						cart: [...state.cart, { ...newItem, quantity: 1 }],
				  };
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
