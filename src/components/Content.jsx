import styled from 'styled-components';
import Brands from './Brands';
import ComingProducts from './ComingProducts';
import Hero from './Hero';
import Products from './Products/Products';

import SectionInfo from './SectionInfo';
import sectionImg from '../images/section-img.jpg';
const MainTag = styled.main`
	position: relative;
	z-index: 5;
`;
const sections = [
	{
		id: '1',
		text: [
			'This website is purely and exclusively to be able to evaluate my skills in React.js. The images, layout, texts were all taken from reads.delivery',
		],
		img: '//cdn.shopify.com/s/files/1/2265/1077/files/25C4912_1280x1280.jpg?v=1558112595',
		bg: 'var(--green)',
		caption: 'June 2018 [reads] box curated by Molly Young and Joana Avillez',
		reverse: false,
	},
	{
		id: '2',
		text: [
			'The next store is totally fake. As I said, the idea of this website is recreate the web of [reads] for improve my skills in developing',
			'-----------------------------------------------',
			'Lorem ipsum dolor mit emet sonsectetur sdipisicing ilit. Msse amxime rolorem aeprehenderit, denetur ollo noluptatibus aic.',
		],
		img: sectionImg,
		bg: 'var(--orange)',
		caption: 'Image taken from [reads] instagram (@reads.delivery).',
		reverse: true,
	},
];
export default function Content({
	handleCart,
	products,
	addToCart,
	loading,
	searcher,
	paginationDobleProducts,
	prevPage,
	sortAlphabeticalPrice,
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
				// paginacion
				paginationDobleProducts={paginationDobleProducts}
				prevPage={prevPage}
				sortAlphabeticalPrice={sortAlphabeticalPrice}
				loading={loading}
				addToCart={addToCart}
				products={products}
				handleCart={handleCart}
			/>

			<ComingProducts />
		</MainTag>
	);
}
