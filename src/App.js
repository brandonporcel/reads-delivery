import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './components/index.css';
function App() {
	return (
		<>
			<div className="container">
				<Aside />
				<div className="top">
					<Header />
					<Content />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
