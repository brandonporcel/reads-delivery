import {
	READ_COMING_PRODUCT,
	NEXT_COMING_PRODUCT,
	PREV_COMING_PRODUCT,
} from '../types';

export const readComingProduct = (data, contador) => {
	return {
		type: READ_COMING_PRODUCT,
		payload: { data, contador },
	};
};
export const nextComingProduct = (data, contador) => {
	return {
		type: NEXT_COMING_PRODUCT,
		payload: { data, contador },
	};
};
export const prevComingProduct = (data, contador) => {
	return {
		type: PREV_COMING_PRODUCT,
		payload: { data, contador },
	};
};
