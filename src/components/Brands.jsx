import styled, { keyframes } from 'styled-components';
import { brands } from '../images/brandsImg';
// gAobpi{from{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}to{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}}/*!
const moving = keyframes`
  0% {
    transform: translateX(0px);
  }
  10%{
      transform: translateX(-150px);
  }
  20% {
    transform: translateX(-250px);
  }
  30% {
    transform: translateX(-350px);
    
  }
  40% {
    transform: translateX(-450px);
    
  }
  50% {
    transform: translateX(-550px);
    
  }
  60% {
    transform: translateX(-950px);
    
  }
  70% {
    transform: translateX(145px);
    opacity: 0;
    
  }
  80% {
    transform: translateX(145px);
    
  }
  90% {
    transform: translateX(70px);
  }
  
  100% {
    
    transform: translateX(0px);
    
  }
`;
const BrandsWrapper = styled.div`
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
			animation: ${moving} 5s linear infinite;
			/* animation: ${moving} 0.8s linear infinite; */
			/* animation: ${moving} 1s cubic-bezier(0.19, 1, 0.22, 1) infinite; */
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
`;

export default function Brands() {
	return (
		<BrandsWrapper>
			PRESS FOR READ
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
