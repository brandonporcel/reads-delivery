import React from 'react';
import styled from 'styled-components';
const ButtonStyle = styled.button`
	background-color: var(--yellow);
	cursor: pointer;
	border: none;
	display: inline-block;
	margin-top: 1.5em;
	padding: 0.5em 2em;
	color: #000;
	text-decoration: none;
	font-size: 18px;
	&:hover {
		background-color: var(--yellow-hover);
	}
`;
export default function Button({ text }) {
	return <ButtonStyle>{text}</ButtonStyle>;
}
