import styled from 'styled-components';
const CartWrapper = styled.div`
	position: fixed;
	transform: translateX(500px);
	padding: 1em;
	height: 100vh;
	width: 300px;
	right: 0;
	top: 80px;
	background-color: var(--white);
	opacity: 0;
	visibility: hidden;
	transition: opacity, visibility, transform 2s;
	&.is-open {
		right: 0;
		transform: translateX(0);
		opacity: 1;
		visibility: visible;
	}
`;
export default function Cart({ cartOpen }) {
	return (
		<CartWrapper className={`${cartOpen && 'is-open'}`}>
			<h3>cart</h3>
			<p>lorem</p>
		</CartWrapper>
	);
}
