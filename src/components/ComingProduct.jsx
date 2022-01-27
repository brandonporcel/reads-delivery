import React from 'react';

export default function ComingProduct({ title, description, image, tags }) {
	return (
		<div>
			<h5>{title}</h5>
			<p>{description}</p>
			<div className="tags">
				<ol>
					{tags.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ol>
			</div>
		</div>
	);
}
