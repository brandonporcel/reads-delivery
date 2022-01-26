import React from 'react';

export default function ProductPagination({ paginationDobleProducts }) {
	return (
		<footer>
			<button className="input">
				<svg viewBox="0 0 108.9 51.2">
					<path
						fill="none"
						stroke="#000000"
						strokeMiterlimit="10"
						strokeWidth="2"
						d="M109 25.6H2.2M25.9 1.6l-24 24 24 24"
					></path>
				</svg>
			</button>
			<input type="text" placeholder="1" className="input" />
			<button className="input" onClick={paginationDobleProducts}>
				<svg viewBox="0 0 108.9 51.2">
					<path
						fill="none"
						stroke="#000000"
						strokeMiterlimit="10"
						strokeWidth="2"
						d="M-.1 25.6h106.8M83 1.6l24 24-24 24"
					></path>
				</svg>
			</button>
		</footer>
	);
}
