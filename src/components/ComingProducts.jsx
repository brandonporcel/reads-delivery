import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import json from '../api/coming.JSON';
import ComingProduct from './ComingProduct';
import { useDispatch, useSelector } from 'react-redux';
import {
	nextComingProduct,
	readComingProduct,
} from '../actions/coming.actions';
const Container = styled.section`
	padding: var(--section-p);
	background-color: var(--yellow);
	display: grid;
	grid-template: 'info slide-img' 1fr/1fr 3fr;
	gap: var(--unit);
	.info {
		grid-area: info;
		display: grid;
		align-content: space-between;
		h4,
		h5,
		.slide-state {
			font-size: 32px;
			font-weight: 400;
			margin: 20px 0;
		}
		.buttons {
			margin-top: 20px;
			button {
				/* background: none;
				border: none; */
				margin-right: 20px;
				cursor: pointer;
				svg {
					width: 50px;
				}
			}
		}
		.tags {
			margin: 20px 0;
			margin-left: 20px;
		}
	}
	.img-ctn {
		grid-area: slide-img;
		height: 550px;
		overflow: hidden;
		cursor: crosshair;
	}
`;

export default function ComingProducts() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const { products } = state.comingProducts;

	const [productsApi, setProductsApi] = useState([]);
	const [contador, setContador] = useState(0);
	useEffect(() => {
		contador > productsApi.length && setContador(0);
		contador === -1 && setContador(productsApi.length);

		const handleApi = async (endpoint) => {
			try {
				const res = await fetch(endpoint);
				const data = await res.json();
				dispatch(readComingProduct(data, contador));
				setProductsApi(data);
			} catch (err) {
				console.log(err);
			}
		};
		handleApi(json);
	}, [dispatch, contador, productsApi.length]);

	return (
		<Container>
			<div className="info">
				<div>
					<h4>It's Coming...</h4>
					<div className="number-arrows-ctn">
						<span className="slide-state">
							{contador} / {productsApi.length}
						</span>
						<div className="buttons">
							<button
								onClick={() => {
									setContador(contador - 1);
									dispatch(nextComingProduct(productsApi, contador));
								}}
							>
								<svg viewBox="0 0 108.9 51.2">
									<path
										fill="none"
										stroke="#000000"
										strokeMiterlimit="10"
										strokeWidth="2"
										d="M109 25.6H2.2M25.9 1.6l-24 24 24 24"
									></path>
								</svg>
							</button>
							<button
								onClick={() => {
									setContador(contador + 1);
									dispatch(nextComingProduct(productsApi, contador));
								}}
							>
								<svg viewBox="0 0 108.9 51.2">
									<path
										fill="none"
										stroke="#000000"
										strokeMiterlimit="10"
										strokeWidth="2"
										d="M-.1 25.6h106.8M83 1.6l24 24-24 24"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{products.map((el) => (
					<ComingProduct
						key={el.id}
						title={el.title}
						description={el.description}
						image={el.image}
						tags={el.tags}
					/>
				))}
			</div>
			{products.map((el) => (
				<div key={el.id} className="img-ctn">
					<img src={el.image} alt="" />
				</div>
			))}
		</Container>
	);
}
