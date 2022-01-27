import { useState } from 'react';
import styled from 'styled-components';
import PopUp from './PopUp';
const FooterWrapper = styled.footer`
	grid-template-columns: 7fr 5fr;
	padding: 130px var(--section-p);
	font-size: 32px;

	background: #f7f4f2;
	color: #000000b3;
	display: grid;
	grid-column: 1 / span 2;
	gap: var(--gutter);
	.menu-list-ctn {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--unit);
		ul > li {
			padding-top: 10px;
		}
	}

	label {
		margin-bottom: 1em;
		display: block;
		/* text-decoration: underline; */
		border-bottom: thin solid;
		cursor: pointer;
	}
	.inputs-signup {
		display: grid;
		grid-template-columns: auto 160px;
		min-height: 88px;

		input,
		button {
			background: transparent;
			border: none;
			font-size: 32px;
		}
		input {
			border: 2px solid;
			width: 100%;
			text-align: center;
		}
		button {
			cursor: pointer;
			text-align: center;
			border-right: 2px solid;
			border-top: 2px solid;
			border-bottom: 2px solid;
			&:hover {
				background: var(--black);
				color: var(--white);
				/* border-top: 4px solid; */
			}
		}
	}
	@media screen and (max-width: 700px) {
		.inputs-signup {
			min-height: 72px;
			input,
			button {
				font-size: 27px;
			}
		}
	}
`;
export default function Footer({ handlePopUpSubmit, isOpenModal, closeModal }) {
	const [form, setForm] = useState({
		name: '',
	});
	const handleInput = (e) => {
		setForm({ [e.target.name]: e.target.value });
	};

	return (
		<FooterWrapper className="bottom footer">
			<div className="menu-list-ctn default-cursor">
				<div className="left">
					<ul>
						<li style={{ textDecoration: 'underline' }}>
							<a href="https://reads.delivery" target={'noreferrer'}>
								Visit original
							</a>{' '}
						</li>
						<li>Libraries</li>
						<li>Collections</li>
						<li>How it works</li>
						<li>Account</li>
					</ul>
				</div>
				<div className="right social">
					<ul>
						<li>Instagram</li>
						<li>Twitter</li>
						<li>Facebook</li>
						<li>Medium</li>
					</ul>
				</div>
			</div>

			<form onSubmit={(e) => handlePopUpSubmit(e, form)}>
				<label htmlFor="email-address">PopUp.</label>
				<div className="inputs-signup">
					<input
						type="text"
						id="email-address"
						name="name"
						placeholder="Your name"
						onChange={handleInput}
						value={form.name}
						required
					/>
					<button>See</button>
				</div>
			</form>
			{
				<PopUp isOpen={isOpenModal} closeModal={closeModal}>
					<h6>Hi {form.name}</h6>
					<small>👋</small>
				</PopUp>
			}
		</FooterWrapper>
	);
}
