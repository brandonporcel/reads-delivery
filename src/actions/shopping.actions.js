import {
	READ_PRODUCTS,
	ADD_TO_CART,
	DELETE_ONE_FROM_CART,
	DELETE_ALL_FROM_CART,
	BUY_CART,
	FILTER,
} from '../types';

export const readProducts = (data) => {
	return {
		type: READ_PRODUCTS,
		payload: data,
	};
};
export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		payload: id,
	};
};
export const deleteFromCart = (id, all = false) =>
	all
		? { type: DELETE_ALL_FROM_CART, payload: id }
		: { type: DELETE_ONE_FROM_CART, payload: id };

export const buyCart = () => {
	return { type: BUY_CART };
};
export const filterProducts = (word, productsDoble) => {
	return { type: FILTER, payload: { word, productsDoble } };
};
