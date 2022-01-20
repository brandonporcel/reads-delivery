import styled from 'styled-components';
import Button from './Button';
import SectionInfo from './SectionInfo';
const MainTag = styled.main`
	.hero {
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
	}
`;
const sections = [
	{
		id: '1',
		text: 'To our [reads] community Firstly, we wanted to say thank you for being so supportive of [reads] as a brand and business and us as people.',
		img: '//cdn.shopify.com/s/files/1/2265/1077/files/25C4912_1280x1280.jpg?v=1558112595',
		bg: 'var(--green)',
		caption: 'June 2018 [reads] box curated by Molly Young and Joana Avillez',
	},
	{
		id: '2',
		text: "Our friends helped us make a video, we launched [reads] on Kickstarter and threw a party before we knew what we were getting ourselves into. We had no idea where [reads] would go, or what it would be but we knew books were important and they weren't going anywhere.",
		img: '//cdn.shopify.com/s/files/1/2265/1077/files/18814571_1493326030738909_736858780525996013_o_1280x1280.jpg?v=1564760878',
		bg: 'var(--orange)',
		caption: 'Us in December 2016 when [reads] was just an idea.',
		reverse: true,
	},
];
export default function Content() {
	return (
		<MainTag>
			<div className="center hero">
				<video
					className="brand-video"
					loop=""
					playsInline=""
					name="media"
					id="hero-media"
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
								Check out our Instagram →
							</a>
						}
					/>
				</div>
			</div>
			{sections.map((el) => {
				return (
					<SectionInfo
						text={el.text}
						img={el.img}
						bg={el.bg}
						caption={el.caption}
						reverse={el.reverse}
					/>
				);
			})}
			<div className="info-section section-content-slider">
				<h1>asd</h1>
			</div>
		</MainTag>
	);
}
