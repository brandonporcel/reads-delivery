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
export default function CartProduct({
	id,
	title,
	price,
	image,
	quantity,
	deleteOne,
	deleteAllProduct,
}) {
	return (
		<CartProductWrapper>
			<div className="cart-product-img-ctn">
				<img src={image} alt="" />
			</div>
			<div className="cart-product-body">
				<h4>{title}</h4>
				<div className="cart-product-details">
					<p>
						${price} x {quantity}{' '}
						<strong>${parseFloat(price * quantity).toFixed(2)}</strong>
					</p>
					<div>
						<button onClick={() => deleteOne(id)}>-1</button>
						<button onClick={() => deleteAllProduct(id, true)}>del</button>
					</div>
				</div>
			</div>
		</CartProductWrapper>
	);
}
