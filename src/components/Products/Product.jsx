import React, { useRef } from 'react';

import img from '../../images/book-list.jpg';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
const notifHide = keyframes`
	0%   {opacity: 1;}
    90%  {opacity: 1;}
    100% {
		opacity: 0; 
		display:none;
		visibility:hidden
	}
`;
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
	.add-to-cart-notif {
		box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
			0 1px 18px 0 rgb(0 0 0 / 12%);
		background-color: var(--gray);
		visibility: visible;
		bottom: 20px;
		height: 50px;
		color: var(--black);
		border-radius: 4px;
		width: 350px;
		position: fixed;
		left: calc(50% - var(--unit));
		justify-content: center;
		align-items: center;
		z-index: 50;
		animation: ${notifHide} 2s forwards;
		transition: opacity 1s;
		padding: 0 15px;
		.add-to-cart-notif-ctn {
			transition: opacity 1s;
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 100%;
			button {
				background: none;
				border: none;
				border-radius: 4px;
				cursor: pointer;
				padding: 10px;
				&:hover {
					background-color: var(--yellow);
				}
				span {
					font-size: 18px;
					font-weight: bold;
					color: #181818;
				}
			}
		}
	}
`;
export default function Product({ title, author, price, image, handleCart }) {
	let showNotifBtn = useRef(),
		notif = useRef();
	const handleToggleNotif = () => {
		notif.current.style.display = 'flex';
		notif.current.style.visibility = 'visible';
	};
	return (
		<ProductsWrapper>
			<div className="product-img" style={{ background: `${image}` }}>
				{/* <img src={img} alt="" /> */}
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
				<div ref={showNotifBtn} onClick={handleToggleNotif}>
					<Button text="Add to Cart" />
				</div>
				<div
					ref={notif}
					className="add-to-cart-notif"
					style={{ display: 'none', visibility: 'hidden' }}
				>
					<div className="add-to-cart-notif-ctn">
						<p>You added a new product</p>
						<button type="button" onClick={handleCart}>
							<span>Cart</span>
						</button>
					</div>
				</div>
			</div>
		</ProductsWrapper>
	);
}
