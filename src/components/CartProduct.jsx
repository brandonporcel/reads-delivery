import React from 'react';
import styled from 'styled-components';
const CartProductWrapper = styled.article`
	display: grid;
	grid-template-columns: 50px 185px;
	gap: 10px;
	overflow: hidden;
	margin: 20px 0;
	.cart-product-img-ctn {
		/* width: 50px;
		height: 50px; */
		border: 1px solid #00000075;
		img {
			height: 50px;
		}
	}
	.cart-product-body {
		width: 185px;
		display: grid;
		gap: 10px;
		h4 {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		.cart-product-details {
			display: flex;
			justify-content: space-between;

			button {
				padding: 2px 5px;
				margin-left: 5px;
			}
		}
	}
`;
export default function CartProduct({ title, price, image, quantity }) {
	return (
		<CartProductWrapper>
			<div className="cart-product-img-ctn">
				<img src={image} alt="" />
			</div>
			<div className="cart-product-body">
				<h4>{title}</h4>
				<div className="cart-product-details">
					<p>
						${price} x {quantity} <strong>${price * quantity}</strong>
					</p>
					<div>
						<button>-1</button>
						<button>del</button>
					</div>
				</div>
			</div>
		</CartProductWrapper>
	);
}
