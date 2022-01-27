import styled, { keyframes } from 'styled-components';
import { brands } from '../images/brandsImg';
const moving = keyframes`
 0% {
    transform: translateX(-500%); 	
}
100% {
	transform: translateX(500%);
`;

const BrandsWrapper = styled.section`
	background: var(--brandBg);
	display: grid;
	padding: 44px var(--unit);
	grid-template-columns: 165px auto;
	align-items: center;

	.brands-ctn {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		overflow: hidden;
		a {
			/* animation: ${moving} 10s cubic-bezier(1, 1.12, 1, 0.89) infinite; */

			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1em;
			position: relative;
			img {
				width: 100px;
				opacity: 0.9;
				transition: opacity 0.2s;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
		text-align: center;
		gap: 20px;
	}
	@media screen and (min-width: 700px) {
		.brands-ctn {
			a {
				animation: ${moving} 10s linear infinite;
			}
		}
	}
`;

export default function Brands() {
	return (
		<BrandsWrapper>
			<p className="default-cursor">PRESS FOR READ</p>
			<div className="brands-ctn">
				{brands.map((el, index) => {
					return (
						<a key={index} href={el.link} target={'_blank'} rel={'noreferrer'}>
							<img src={el.logo} loading="lazy" alt={el.name} />
						</a>
					);
				})}
			</div>
		</BrandsWrapper>
	);
}
