import Button from './Button';
import styled from 'styled-components';
import Oferta from './Oferta';
import { useContext } from 'react';
import PromoContext from '../context/PromoContext';

const HeroCtn = styled.section`
	position: relative;
	width: 100%;
	height: calc(100vh - 80px);

	.brand-video {
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
	}
	.content {
		position: relative;
		text-align: center;
		z-index: 10;
		color: var(--white);
		h2 {
			font-size: 72px;
			font-weight: 400;
			line-height: 1.6;
		}
		p {
			font-weight: 500;
			text-transform: uppercase;
			font-size: 18px;
			padding: 1em;
		}
	}
	@media screen and (max-width: 700px) {
		.content h2 {
			font-size: 42px;
		}
	}
`;
export default function Hero() {
	const { promo } = useContext(PromoContext);
	return (
		<HeroCtn className="center">
			{promo && <Oferta />}
			<video
				className="brand-video"
				loop=""
				playsInline=""
				name="media"
				poster="//cdn.shopify.com/s/files/1/2265/1077/files/unspecified-6_72053b90-41d4-4898-90ba-bcfb3a3697ae_1920x1280.jpg?v=1561415800"
				autoPlay
				muted
			>
				<source
					src="https://cdn.shopify.com/s/files/1/2265/1077/files/adults_20sec_cut_optimized.mp4?5883"
					type="video/mp4"
				/>
			</video>
			<div className="content">
				<h2>Learn Forever</h2>
				<p>A COMMUNITY FOR ADVENTUROUS READERS</p>
				<Button
					text={
						<a
							target={'_blank'}
							rel="noreferrer"
							href="https://www.instagram.com/reads.delivery/"
						>
							Check out their Instagram →
						</a>
					}
				/>
			</div>
		</HeroCtn>
	);
}
