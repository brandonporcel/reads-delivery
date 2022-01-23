import styled from 'styled-components';
import Button from './Button';
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
	}
	.title {
		border-bottom: 1px solid #00000075;
		padding: 1em;
	}
	.cart-products-ctn {
		padding: 0 1em;
		overflow: auto;
		.cart-product {
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
		}
	}
	.buy-btn {
		padding: 0 1em;
		button {
			width: 100%;
		}
	}
`;
export default function Cart({ cartOpen }) {
	return (
		<CartWrapper className={`${cartOpen && 'is-open'}`}>
			<div className="title">
				<h3>Your Order</h3>
			</div>
			<div className="cart-products-ctn">
				<article className="cart-product">
					<div className="cart-product-img-ctn">
						<img src="" alt="" />
					</div>
					<div className="cart-product-body">
						<h4>Looking For Alaska, John Green</h4>
						<div className="cart-product-details">
							<p>
								$125 x 4 <strong>$500</strong>
							</p>
							<div>
								<button>-1</button>
								<button>del</button>
							</div>
						</div>
					</div>
				</article>
				<article className="cart-product">
					<div className="cart-product-img-ctn">
						<img src="" alt="" />
					</div>
					<div className="cart-product-body">
						<h4>Looking For Alaska, John Green</h4>
						<div className="cart-product-details">
							<p>
								$125 x 4 <strong>$500</strong>
							</p>
							<div>
								<button>-1</button>
								<button>del</button>
							</div>
						</div>
					</div>
				</article>
				<article className="cart-product">
					<div className="cart-product-img-ctn">
						<img src="" alt="" />
					</div>
					<div className="cart-product-body">
						<h4>Looking For Alaska, John Green</h4>
						<div className="cart-product-details">
							<p>
								$125 x 4 <strong>$500</strong>
							</p>
							<div>
								<button>-1</button>
								<button>del</button>
							</div>
						</div>
					</div>
				</article>
			</div>
			<div className="buy-btn">
				<Button text="Buy" />
			</div>
		</CartWrapper>
	);
}
