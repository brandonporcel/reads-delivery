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
		@media screen and (max-width: 700px) {
			height: 80px;
			transform: initial;
		}
	}
`;
export default function Aside() {
	return (
		<AsideTag>
			<div className="center aside-text-ctn">
				<p className="default-cursor hover-underline">Read More</p>
			</div>
		</AsideTag>
	);
}
