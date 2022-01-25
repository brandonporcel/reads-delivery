import React, { useContext } from 'react';
import styled from 'styled-components';
import PromoContext from '../context/PromoContext';
const Wrapper = styled.div`
	background: var(--green);
	width: 95%;
	z-index: 50;
	padding: 20px;
	position: absolute;
	text-align: center;
	top: 0;
	margin: 20px 0;

	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	p {
		font-size: 18px;
		color: var(--white);
		font-weight: 800;
	}
	button {
		position: absolute;
		right: 1em;
		padding: 1em;
		cursor: pointer;
		/* top: 0; */

		/* top: 0; */
	}
`;

export default function Oferta() {
	const { handlePromo, promoValue } = useContext(PromoContext);
	return (
		<Wrapper>
			<button onClick={handlePromo}>X</button>
			<p>{promoValue}% OFF !!!</p>
		</Wrapper>
	);
}
