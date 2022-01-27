import {
	READ_PRODUCTS,
	ADD_TO_CART,
	DELETE_ONE_FROM_CART,
	DELETE_ALL_FROM_CART,
	BUY_CART,
	FILTER,
	NEXT_PAGINATION,
	PREV_PAGINATION,
	SORT_PRICE,
	SORT_ALPHA,
} from '../types';

export const initialState = {
	products: [],
	cart: [],
};

export function shoppingReducer(state = initialState, action) {
	let itempsPerPage = 4;
	switch (action.type) {
		case READ_PRODUCTS: {
			const productsFromApi = action.payload.data.map((product) => product);
			const productsDoblee = [...productsFromApi].splice(0, itempsPerPage);

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
			const termToFind = action.payload.word.toLowerCase();

			const searchResults = action.payload.productsDoble.filter(
				(elemento) =>
					elemento.title.toLowerCase().includes(termToFind) && elemento
			);

			return { ...state, products: [...searchResults] };
		}
		case NEXT_PAGINATION: {
			const index =
				action.payload.contador === 5
					? (action.payload.contador = 0)
					: action.payload.contador * itempsPerPage;
			console.log('next', action.payload.contador, index);
			const productsShow = [...action.payload.productsDoble].splice(
				index,
				itempsPerPage
			);
			return { ...state, products: productsShow };
		}
		case PREV_PAGINATION: {
			let prevPage = action.payload.prevContador - 2;

			const indexFrom =
				action.payload.contador === -1
					? (prevPage = 5)
					: prevPage * itempsPerPage;

			// const indexFrom = action.payload.prevContador * itempsPerPage;
			const productsToShow = [...action.payload.productsDoble].splice(
				indexFrom,
				itempsPerPage
			);
			// console.log('prev', action.payload.prevContador, prevPage, indexFrom);

			return { ...state, products: productsToShow };
		}
		case SORT_ALPHA: {
			const productsDobleALpha = action.payload.productsDoble;

			const sortAlpha = productsDobleALpha.sort((a, b) => {
				return a.title.localeCompare(b.title);
			});

			return { ...state, products: sortAlpha };
		}
		case SORT_PRICE: {
			const productsDoblePrice = action.payload.productsDoble;

			const sortPrice = productsDoblePrice.sort((a, b) => {
				if (a.price > b.price) return -1;
				if (b.price > a.price) return 1;
				return 0;
			});

			return { ...state, products: sortPrice };
		}
		default:
			return state;
	}
}
