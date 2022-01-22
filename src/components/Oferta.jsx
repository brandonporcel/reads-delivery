import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
	background: var(--green);
	width: 95%;
	z-index: 50;
	padding: 20px;
	position: absolute;
	text-align: center;
	top: 0;
	margin: 20px 0;
	p {
		font-size: 18px;
		color: var(--white);
		font-weight: 800;
	}
`;

export default function Oferta() {
	return (
		<Wrapper>
			<p>New ofert!! 15% aprovecha boludo</p>
		</Wrapper>
	);
}
