import React from 'react';
import styled from 'styled-components';

import Product from './Product';
import ProductHeader from './ProductHeader';
const books = [
	{
		id: '1',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '15.63',
	},
	{
		id: '2',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '25.63',
	},
	{
		id: '3',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '25.63',
	},
	{
		id: '4',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '15.63',
	},
];
const ProductsWrapper = styled.section`
	padding: var(--unit);
	background-color: var(--white);

	.products-ctn {
		padding: 20px 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(200px, 1fr));
		gap: var(--unit);
	}
	footer {
		padding: 20px 0;
		display: grid;
		justify-content: center;
		align-content: center;

		gap: 4px;
		grid-auto-flow: column;
		input,
		button {
			text-align: center;
			padding: 10px 5px;
			width: 50px;
		}

		button {
			background: white;
			cursor: pointer;
			&:hover {
				background: #e9e8e8;
			}
		}
	}
`;
export default function Products() {
	return (
		<ProductsWrapper id="shop" className="info-section">
			<ProductHeader />
			<div className="products-ctn">
				{books.map((book) => (
					<Product
						key={book.id}
						title={book.title}
						author={book.author}
						price={book.price}
					/>
				))}
			</div>
			<footer>
				<button className="input"> u-- </button>
				<input type="text" placeholder="1" className="input" />
				<button className="input"> --u </button>
			</footer>
		</ProductsWrapper>
	);
}
