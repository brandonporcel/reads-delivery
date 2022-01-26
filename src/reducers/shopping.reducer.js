import {
	READ_PRODUCTS,
	ADD_TO_CART,
	DELETE_ONE_FROM_CART,
	DELETE_ALL_FROM_CART,
	BUY_CART,
	FILTER,
	NEXT_PAGINATION,
} from '../types';

export const initialState = {
	products: [],
	cart: [],
};
export function shoppingReducer(state = initialState, action) {
	let productsDoblee = [];
	let itempsPerPage = 4;
	switch (action.type) {
		case READ_PRODUCTS: {
			const productsFromApi = action.payload.data.map((product) => product);
			productsDoblee = [...productsFromApi].splice(0, itempsPerPage);

			return {
				...state,
				products: productsDoblee,
			};
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
			const product = state.cart.find((el) => el.id === action.payload);
			return product.quantity > 1
				? {
						...state,
						cart: state.cart.map((el) =>
							el.id === action.payload
								? {
										...el,
										quantity: el.quantity - 1,
								  }
								: el
						),
				  }
				: {
						...state,
						cart: state.cart.filter((el) => el.id !== action.payload),
				  };
		}
		case DELETE_ALL_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter((el) => el.id !== action.payload),
			};
		}
		case BUY_CART: {
			alert('Thanks for your order!');
			return { ...state, cart: [] };
		}
		case FILTER: {
			const searchResults = action.payload.productsDoble.filter(
				(elemento) =>
					elemento.title
						.toLowerCase()
						.includes(action.payload.word.toLowerCase()) && elemento
			);

			return { ...state, products: [...searchResults] };
		}
		case NEXT_PAGINATION: {
			// if (action.payload.contador === 20) action.payload.contador = 1;
			const firstIndex =
				action.payload.contador === 5
					? (action.payload.contador = 0)
					: action.payload.contador * itempsPerPage;

			const a = [...action.payload.productsDoble].splice(
				firstIndex,
				itempsPerPage
			);
			console.log(
				action.payload.contador,
				action.payload.productsDoble.length,
				action.payload.contador
			);

			// return {
			// 	...state,
			// 	products: [...action.payload.productsDoble].splice(16, 20),
			// };

			return { ...state, products: a };

			// if (firstIndex === 16) {
			// 	return {
			// 		...state,
			// 		products: [...action.payload.productsDoble].splice(16, itempsPerPage),
			// 	};
			// }
			// // console.log(firstIndex, state, { ...state });
			// return { ...state, products: a };
		}
		default:
			return state;
	}
}
