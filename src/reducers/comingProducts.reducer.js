import {
	READ_COMING_PRODUCT,
	NEXT_COMING_PRODUCT,
	PREV_COMING_PRODUCT,
} from '../types';
const initialProducts = { products: [] };
export const comingProducts = (state = initialProducts, action) => {
	switch (action.type) {
		case READ_COMING_PRODUCT: {
			const comingProducts = action.payload.data;
			const randomIndex = Math.round(Math.random() * comingProducts.length) - 1;

			return { ...state, products: comingProducts.splice(randomIndex, 1) };
		}
		case NEXT_COMING_PRODUCT: {
			const index = action.payload.contador;
			const allProducts = action.payload.data;
			const nextProd = [...allProducts].splice(index, 1);

			return { ...state, products: nextProd };
		}
		case PREV_COMING_PRODUCT: {
			const index = action.payload.contador;
			const allProducts = action.payload.data;
			const prevProd = [...allProducts].splice(index, 1);
			return { ...state, products: prevProd };
		}
		default: {
			return { ...state };
		}
	}
};
