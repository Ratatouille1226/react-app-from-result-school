import ReactLogo from './assets/react.svg';

export const App = () => {
	const currentYear = `Текущий год: ${new Date().getFullYear()}`; //декларативный стиль
	return (
		<div className="App">
			<header className="App-header">
				<img src={ReactLogo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p>
			</header>
		</div>
	);
};

