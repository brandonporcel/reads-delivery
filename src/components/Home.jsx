import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Aside from './/Aside';
import Header from './/Header';
import Footer from './/Footer';
import Content from './/Content';
import { useModal } from '../hooks/useModal';

// for redux
import {
	addToCart,
	deleteFromCart,
	readProducts,
	buyCart,
	filterProducts,
	nextPagination,
	previousPagination,
	sortAlphabetical,
	sortPrice,
} from '../actions/shopping.actions';

export default function Home() {
	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [loading, setLoading] = useState(false);
	// paginacion
	const [contador, setContador] = useState(1);
	// products from api
	const [searcherInput, setSearcherInput] = useState([]);
	// header cart
	const [cartOpen, setCartOpen] = useState(false);
	const handleCart = (id) => {
		if (cartOpen) {
			setCartOpen(false);
		} else {
			setCartOpen(true);
		}
	};

	const handlePopUpSubmit = (e, form, setForm) => {
		e.preventDefault();
		if (!form.name.trim() || form.name === undefined) {
			alert('Input required');
			return;
		} else {
			openModal();
		}
	};
	// -redux
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const { products, cart } = state.shopping;

	const endpoint = 'https://fakestoreapi.com/products?limit=20';
	useEffect(() => {
		const handleApi = async (endpoint) => {
			try {
				setLoading(true);
				const res = await fetch(endpoint);
				const data = await res.json();
				setSearcherInput(data);
				dispatch(readProducts(data));
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		handleApi(endpoint);
	}, [dispatch]);
	// -----
	const nextPage = () => {
		contador === 5 ? setContador(1) : setContador(contador + 1);
		dispatch(nextPagination(searcherInput, contador));
	};
	const prevPage = () => {
		contador === -1 ? setContador(5) : setContador(contador - 1);
		// contador <= 0 ? setContador(5) : setContador(contador - 1);
		dispatch(previousPagination(searcherInput, contador));
	};
	//
	const filterProductss = (word) => {
		const term = word.trim();
		if (!term.trim()) {
			dispatch(readProducts(searcherInput));
		} else {
			dispatch(filterProducts(term, searcherInput));
		}
	};
	return (
		<div className="container">
			<Aside />
			<div className="top">
				<Header
					buyCart={() => dispatch(buyCart())}
					deleteOne={(id) => dispatch(deleteFromCart(id))}
					deleteAllProduct={(id) => dispatch(deleteFromCart(id, true))}
					cart={cart}
					cartOpen={cartOpen}
					handleCart={handleCart}
				/>
				<Content
					searcher={filterProductss}
					// pagination
					paginationDobleProducts={nextPage}
					prevPage={prevPage}
					// filtro sort
					sortAlphabeticalPrice={(value) =>
						value === 'name'
							? dispatch(sortAlphabetical(searcherInput))
							: dispatch(sortPrice(searcherInput))
					}
					loading={loading}
					addToCart={(id) => dispatch(addToCart(id))}
					handleCart={handleCart}
					products={products}
				/>
			</div>
			<Footer
				isOpenModal={isOpenModal}
				closeModal={closeModal}
				handlePopUpSubmit={handlePopUpSubmit}
			/>
		</div>
	);
}
