import store from './store';

import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './components/index.css';

import { useModal } from './hooks/useModal';
import { useState } from 'react';
import { Provider } from 'react-redux';
function App() {
	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [cartOpen, setCartOpen] = useState(false);
	const handlePopUpSubmit = (e, form, setForm) => {
		e.preventDefault();
		if (!form.name.trim() || form.name === undefined) {
			alert('Input required');
			return;
		} else {
			openModal();
		}
	};

	const handleCart = () => {
		if (cartOpen) {
			setCartOpen(false);
		} else {
			setCartOpen(true);
		}
	};

	return (
		<Provider store={store}>
			<div className="container">
				<Aside />
				<div className="top">
					<Header cartOpen={cartOpen} handleCart={handleCart} />
					<Content handleCart={handleCart} />
				</div>
				<Footer
					isOpenModal={isOpenModal}
					closeModal={closeModal}
					handlePopUpSubmit={handlePopUpSubmit}
				/>
			</div>
		</Provider>
	);
}

export default App;
