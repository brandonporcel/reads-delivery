import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './components/index.css';

import { useModal } from './hooks/useModal';

function App() {
	const [isOpenModal, openModal, closeModal] = useModal(false);
	const handlePopUpSubmit = (e, form) => {
		e.preventDefault();
		if (!form.name.trim() || form.name === undefined) {
			alert('Input required');
			return;
		} else {
			openModal();
		}
	};
	return (
		<>
			<div className="container">
				<Aside />
				<div className="top">
					<Header />
					<Content />
				</div>
				<Footer
					isOpenModal={isOpenModal}
					closeModal={closeModal}
					handlePopUpSubmit={handlePopUpSubmit}
				/>
			</div>
		</>
	);
}

export default App;
