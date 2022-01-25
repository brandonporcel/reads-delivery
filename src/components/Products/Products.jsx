import styled from 'styled-components';
import Loader from '../Loader';
import Product from './Product';
import ProductHeader from './ProductHeader';
const books = [
	{
		id: '1',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '15.63',
	},
	{
		id: '2',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '25.63',
	},
	{
		id: '3',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '25.63',
	},
	{
		id: '4',
		title: 'Cien años de Soledad',
		author: 'Gabriel Garcia Marquez',
		price: '15.63',
	},
];
const ProductsWrapper = styled.section`
	padding: var(--unit);
	background-color: var(--white);

	.products-ctn {
		padding: 20px 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(200px, 1fr));
		gap: var(--unit);
	}
	footer {
		padding: 20px 0;
		display: grid;
		justify-content: center;
		align-content: center;

		gap: 4px;
		grid-auto-flow: column;
		input,
		button {
			text-align: center;
			padding: 10px 5px;
			width: 50px;
		}

		button {
			background: white;
			cursor: pointer;
			&:hover {
				background: #e9e8e8;
			}
		}
	}
`;
export default function Products({ handleCart, products, addToCart, loading }) {
	return (
		<ProductsWrapper id="shop" className="info-section">
			<ProductHeader />
			<div className="products-ctn">
				{loading && <Loader />}
				{products.map((product, index) => {
					return (
						<Product
							addToCart={addToCart}
							handleCart={handleCart}
							key={index}
							id={product.id}
							title={product.title}
							author={product.category}
							price={product.price}
							image={product.image}
						/>
					);
				})}
			</div>
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
				<button className="input">
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
		</ProductsWrapper>
	);
}
