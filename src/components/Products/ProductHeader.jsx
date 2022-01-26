import React, { useState } from 'react';
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
export default function ProductHeader({ searcher, sortAlphabeticalPrice }) {
	const [selectOrder, setSelectOrder] = useState({
		value: '',
	});

	const handleSort = (e) => {
		const a = e.target.value;

		// if (e.target.value === 'name') {
		// 	setSelectOrder({ value: 'name' });
		// } else {
		// 	setSelectOrder({ value: 'price' });
		// }
	};
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
				{/* <select onChange={handleSort}> */}
				<select onChange={(e) => sortAlphabeticalPrice(e.target.value)}>
					<option name="name" value="name">
						Name
					</option>
					<option name="price" value="price">
						Price
					</option>
				</select>
			</div>
		</Header>
	);
}
