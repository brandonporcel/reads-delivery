import React, { useRef, useContext } from 'react';

import styled, { keyframes } from 'styled-components';
import Button from '../Button';

import PromoContext from '../../context/PromoContext.js';

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
		p {
			height: 40px;
			overflow: hidden;
		}
		div > button {
			width: 100%	;
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
		animation: ${notifHide} 2.5s forwards;
		transition: opacity 1s;
		padding: 0 15px;
	}
	.add-to-cart-notif-ctn {
			grid-template-columns: 3fr 1fr;
			transition: opacity 1s;
			position: absolute;
			
			align-items: center;
			justify-content: space-around;
			width: 100%;
			display: grid;
			p,
			button {
				padding: 10px;
			}
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
	@media screen and (max-width: 700px) {
		.add-to-cart-notif{
			left:27px;
			width: 90%;
		}
	}
`;
export default function Product({
	id,
	title,
	author,
	price,
	image,
	handleCart,
	addToCart,
}) {
	let showNotifBtn = useRef(),
		notif = useRef();
	const handleToggleNotif = () => {
		notif.current.style.display = 'flex';
		notif.current.style.visibility = 'visible';
	};
	const { promoValue } = useContext(PromoContext);

	return (
		<ProductsWrapper>
			<div className="product-img">
				<img src={image} alt="" />
			</div>
			<div className="product-body">
				<p>
					<strong>{title}</strong>
				</p>
				<p>{author}</p>
				<div className="price">
					<span className="old-price">${price}</span>
					<span>
						<strong>
							{new Intl.NumberFormat('es-AR', {
								style: 'currency',
								currency: 'ARS',
							}).format(
								parseFloat(price - (promoValue / 100) * price).toFixed(2)
							)}
						</strong>
					</span>
				</div>

				<div
					ref={showNotifBtn}
					onClick={() => {
						handleToggleNotif();
						addToCart(id);
					}}
				>
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
