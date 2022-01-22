import React from 'react';
import styled from 'styled-components';
import img from '../images/book-list.jpg';
const Container = styled.section`
	padding: var(--section-p);
	background-color: var(--yellow);
	display: grid;
	grid-template: 'info slide-img' 1fr/1fr 3fr;
	gap: var(--unit);
	.info {
		grid-area: info;
		display: grid;
		align-content: space-between;
		h4,
		h5,
		.slide-state {
			font-size: 32px;
			font-weight: 400;
			margin: 20px 0;
		}
		.buttons {
			margin-top: 20px;
			button {
				/* background: none;
				border: none; */
				margin-right: 20px;
				cursor: pointer;
				svg {
					width: 50px;
				}
			}
		}
		.tags {
			margin: 20px 0;
			margin-left: 20px;
		}
	}
	.img-ctn {
		grid-area: slide-img;
		height: 550px;
		overflow: hidden;
	}
`;
export default function ComingProducts() {
	return (
		<Container>
			<div className="info">
				<div>
					<h4>It's Coming...</h4>
					<div className="number-arrows-ctn">
						<span className="slide-state"> 12/12</span>
						<div className="buttons">
							<button>
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
							<button>
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
						</div>
					</div>
				</div>
				<div className="book-info">
					<h5>May 2018</h5>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
						minima?
					</p>
					<div className="tags">
						<ol>
							<li>Messi</li>
							<li>hip hop</li>
						</ol>
					</div>
				</div>
			</div>
			<div className="img-ctn">
				<img src={img} alt="" />
			</div>
		</Container>
	);
}
