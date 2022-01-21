import React from 'react';
import Button from './Button';
import img from '../images/book-list.jpg';
import styled from 'styled-components';
const ProductsWrapper = styled.article`
	border: 1px solid #00000030;
	.product-img {
		height: 150px;
		position: relative;
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
		}
	}
	.product-body {
		padding: 5px;
		p,
		span {
			padding-top: 2px;
		}
	}
	span {
		display: block;
		&.old-price {
			color: var(--orange);
			text-decoration: line-through;
		}
	}
`;
export default function Product({ title, author, price }) {
	return (
		<ProductsWrapper>
			<div className="product-img">
				<img src={img} alt="" />
			</div>
			<div className="product-body">
				<p>
					<strong>{title}</strong>
				</p>
				<p>{author}</p>
				<div className="price">
					<span className="old-price">${price * 1.5}</span>
					<span>
						<strong>${price}</strong>
					</span>
				</div>
				<Button text="Add to Cart" />
			</div>
		</ProductsWrapper>
	);
}
