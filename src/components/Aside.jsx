import styled from 'styled-components';
const AsideTag = styled.aside`
	grid-area: messaging;
	background-color: var(--yellow);
	position: relative;
	.aside-text-ctn {
		height: 100vh;
		top: 0;
		position: sticky;
		transform: rotate(-90deg);
		transform-origin: 50% 51%;
		z-index: 1;

		/* writing-mode: vertical-rl; */
		/* text-orientation: mixed; */
		/* left: 30px; */
		/* transform: translate(-100%) rotate(-90deg);
		transform-origin: top right;
		width: 100vh; */
	}
`;
export default function Aside() {
	return (
		<AsideTag>
			<div className="center  aside-text-ctn">
				<p className="default-cursor hover-underline">Read More</p>
			</div>
		</AsideTag>
	);
}
