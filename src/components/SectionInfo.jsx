import React from 'react';
import styled from 'styled-components';
const Section = styled.section`
	/* background-color: ${(props) =>
		props.green ? 'var(--green)' : props.orange ? 'var(--orange)' : '#669'}; */
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	color: var(--gray);
	display: grid;
	gap: 80px;
	padding: 80px;
	p {
		font-size: 32px;
	}
	img {
		border: 1px solid;
	}
`;
export default function SectionInfo({ text, img, bg, caption, reverse }) {
	return (
		<Section style={{ background: `${bg}` }} className="info-section">
			<p style={{ order: `${reverse ? '2' : '1'}` }}>{text}</p>

			<div
				className="info-section-img-ctn"
				style={{ order: `${reverse ? '1' : '2'}` }}
			>
				<img src={img} alt="section reads delivery" />
				<div className="caption">{caption}</div>
			</div>
		</Section>
	);
}
