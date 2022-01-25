import React, { useEffect, useState } from 'react';
import Aside from './/Aside';
import Header from './/Header';
import Footer from './/Footer';
import Content from './/Content';

import { useModal } from '../hooks/useModal';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, readProducts } from '../actions/shopping.actions';
export default function Home() {
	const [isOpenModal, openModal, closeModal] = useModal(false);

	const [cartOpen, setCartOpen] = useState(false);
	const handlePopUpSubmit = (e, form, setForm) => {
		e.preventDefault();
		if (!form.name.trim() || form.name === undefined) {
			alert('Input required');
			return;
		} else {
			openModal();
		}
	};
	const handleCart = (id) => {
		console.log(id);
		if (cartOpen) {
			setCartOpen(false);
		} else {
			setCartOpen(true);
		}
	};
	// -------------------
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const { products, cart } = state.shopping;

	// const endpoint = 'https://x-colors.herokuapp.com/api/random?number=60';
	const endpoint = 'https://fakestoreapi.com/products?limit=6';
	useEffect(() => {
		const handleApi = async (endpoint) => {
			try {
				const res = await fetch(endpoint);
				const data = await res.json();
				dispatch(readProducts(data));
			} catch (err) {
				console.log(err);
			}
		};
		handleApi(endpoint);
	}, [dispatch]);
	// -----
	const handleProductToCart = (id) => {
		dispatch(addToCart(id));
	};
	return (
		<div className="container">
			<Aside />
			<div className="top">
				<Header cart={cart} cartOpen={cartOpen} handleCart={handleCart} />
				<Content
					handleProductToCart={handleProductToCart}
					products={products}
					handleCart={handleCart}
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
