import store from './store';

import './components/index.css';

import { Provider } from 'react-redux';
import Home from './components/Home';
import { PromoProvider } from './context/PromoContext';
function App() {
	return (
		<Provider store={store}>
			<PromoProvider>
				<Home />
			</PromoProvider>
		</Provider>
	);
}

export default App;
