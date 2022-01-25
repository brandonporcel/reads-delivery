import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--unit);
	padding: 20px 0;
	height: 90px;
	align-items: center;
	.custom-products {
		display: flex;
		justify-content: flex-end;
		input,
		select {
			width: 150px;
		}
		.searcher {
			margin-right: 20px;
		}
		option {
			color: #00000080;
		}
	}
`;
export default function ProductHeader({ searcher }) {
	return (
		<Header>
			<h3>Shop</h3>
			<div className="custom-products">
				<div className="searcher">
					<input
						type="text"
						placeholder="Search by word"
						onChange={(e) => searcher(e.target.value)}
						className="input"
					/>
				</div>
				<select name="" id="" className="input">
					<option value="">Custom Order</option>
					<option value="">nombre</option>
					<option value="">precio</option>
					<option value="">ofertas</option>
				</select>
			</div>
		</Header>
	);
}
