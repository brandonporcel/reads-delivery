import styled from 'styled-components';
import Loader from '../Loader';
import Product from './Product';
import ProductHeader from './ProductHeader';
import ProductPagination from './ProductPagination';

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
export default function Products({
	handleCart,
	products,
	addToCart,
	loading,
	searcher,
	paginationDobleProducts,
}) {
	return (
		<ProductsWrapper id="shop" className="info-section">
			<ProductHeader searcher={searcher} />
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
			<ProductPagination paginationDobleProducts={paginationDobleProducts} />
		</ProductsWrapper>
	);
}
