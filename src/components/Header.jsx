import styled from 'styled-components';
import Cart from './Cart';
const HeaderTag = styled.header`
	position: sticky;
	top: 0;
	height: 80px;
	display: grid;
	grid-template-columns: 2fr 4fr 2fr;
	background-color: var(--white);
	z-index: 50;
	.nav-shop-link {
		background-color: var(--blue);
		order: 1;
		a {
			font-size: 18px;
			text-transform: uppercase;
			color: var(--yellow);
			padding: 1em;
		}
	}

	h1 {
		order: 2;
		font-size: 24px;
		font-weight: 400;
		a {
			text-decoration: none;
		}
	}

	.nav-cart {
		order: 3;
		span {
			cursor: pointer;
		}
		.chart-items {
			margin-left: 10px;
			width: 59px;
			height: 59px;
			background-color: var(--yellow);
			border-radius: 50%;

			span {
				font-size: 18px;
			}
		}
	}
	@media screen and (max-width: 700px) {
		padding-right: 25px;
		.nav-shop-link {
			background-color: transparent;
			a {
				color: var(--black);
			}
		}
	}
`;

export default function Header({
	handleCart,
	cartOpen,
	cart,
	deleteOne,
	deleteAllProduct,
	buyCart,
}) {
	return (
		<HeaderTag className="header">
			<nav className="center nav-shop-link">
				<a className="hover-underline" href="#shop">
					shop
				</a>
			</nav>
			<h1 className="center">
				<a href="/">[reads]</a>
			</h1>
			<nav className="center nav-cart">
				<span onClick={handleCart}>Cart</span>
				<div className="center chart-items">
					<span className="default-cursor" onClick={handleCart}>
						{cart.length}
					</span>
				</div>
			</nav>
			<Cart
				buyCart={buyCart}
				cart={cart}
				cartOpen={cartOpen}
				deleteOne={deleteOne}
				deleteAllProduct={deleteAllProduct}
			/>
		</HeaderTag>
	);
}
