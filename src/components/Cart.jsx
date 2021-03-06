import { useContext } from 'react';
import styled from 'styled-components';
import PromoContext from '../context/PromoContext';
import Button from './Button';
import CartProduct from './CartProduct';
const CartWrapper = styled.div`
	position: fixed;
	transform: translateX(500px);

	height: 100vh;
	width: 300px;
	right: 0;
	top: var(--unit);
	background-color: var(--white);
	opacity: 0;
	visibility: hidden;
	transition: opacity, visibility, transform 2s;
	border: 1px solid #00000075;
	border-radius: 5px;
	display: grid;
	grid-template-rows: repeat(3, 10% 60% 10%);
	&.is-open {
		right: 0;
		transform: translateX(0);
		opacity: 1;
		visibility: visible;
		@media screen and (max-width: 700px) {
			gap: 15px;
		}
	}
	.title {
		border-bottom: 1px solid #00000075;
		padding: 1em;
		height: min-content;
	}
	.cart-products-ctn {
		padding: 0 1em;
		overflow: auto;
	}
	.buy-btn {
		padding: 0 1em;
		button {
			width: 100%;
		}
	}
`;
export default function Cart({
	cartOpen,
	cart,
	deleteOne,
	deleteAllProduct,
	buyCart,
}) {
	const { promoValue } = useContext(PromoContext);
	return (
		<CartWrapper className={`${cartOpen && 'is-open'}`}>
			<div className="title">
				<h3>Your Order</h3>
			</div>
			<div className="cart-products-ctn">
				{cart.length === 0 ? (
					<p> No products...</p>
				) : (
					cart.map((el) => {
						return (
							<CartProduct
								deleteOne={deleteOne}
								deleteAllProduct={deleteAllProduct}
								key={el.id}
								id={el.id}
								quantity={el.quantity}
								title={el.title}
								price={parseFloat(
									el.price - (promoValue / 100) * el.price
								).toFixed(2)}
								image={el.image}
							/>
						);
					})
				)}
			</div>
			<div className="buy-btn" onClick={buyCart}>
				<Button text="Buy" />
			</div>
		</CartWrapper>
	);
}
