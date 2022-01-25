import styled from 'styled-components';
import Brands from './Brands';
import ComingProducts from './ComingProducts';
import Hero from './Hero';
import Products from './Products/Products';

import SectionInfo from './SectionInfo';

const MainTag = styled.main`
	position: relative;
	z-index: 5;
`;
const sections = [
	{
		id: '1',
		text: 'To our [reads] community Firstly, we wanted to say thank you for being so supportive of [reads] as a brand and business and us as people.',
		img: '//cdn.shopify.com/s/files/1/2265/1077/files/25C4912_1280x1280.jpg?v=1558112595',
		bg: 'var(--green)',
		caption: 'June 2018 [reads] box curated by Molly Young and Joana Avillez',
		reverse: false,
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
export default function Content({
	handleCart,
	products,
	addToCart,
	loading,
	searcher,
}) {
	return (
		<MainTag>
			<Hero />
			<Brands />
			{sections.map((el) => {
				return (
					<SectionInfo
						text={el.text}
						img={el.img}
						bg={el.bg}
						key={el.id}
						caption={el.caption}
						reverse={el.reverse}
					/>
				);
			})}

			<Products
				searcher={searcher}
				loading={loading}
				addToCart={addToCart}
				products={products}
				handleCart={handleCart}
			/>
			<ComingProducts />
		</MainTag>
	);
}
