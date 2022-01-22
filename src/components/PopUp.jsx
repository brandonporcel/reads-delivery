import styled from 'styled-components';

const PopUpWrapper = styled.article`
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	background-color: rgba(0, 0, 0, 0.75);
	display: none;
	justify-content: center;
	align-items: center;
	&.is-open {
		display: flex;
	}
	.modal-container {
		position: relative;
		padding: 2rem;
		min-width: 320px;
		max-width: 480px;
		min-height: 200px;
		max-height: 600px;
		overflow-y: auto;
		background-color: var(--white);
		.modal-close {
			display: flex;
			justify-content: flex-end;
			margin-bottom: 10px;
			button {
				cursor: pointer;
				padding: 10px 15px;
			}
		}
	}
`;
export default function PopUp({ children, isOpen, closeModal }) {
	const handleModalContainerClick = (e) => e.stopPropagation();

	return (
		<PopUpWrapper className={`${isOpen && 'is-open'}`} onClick={closeModal}>
			sad
			<div className="modal-container" onClick={handleModalContainerClick}>
				<div className="modal-close">
					<button className="input" onClick={closeModal}>
						X
					</button>
				</div>
				{children}
			</div>
		</PopUpWrapper>
	);
}
