import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeAppProvider } from './context/ThemeSwitcher';

import Layout from './components/Layout';

function App() {
	return (
		<div className='App'>
			<ThemeAppProvider>
				<GlobalStyles />
				<Layout />
			</ThemeAppProvider>
		</div>
	);
}

export default App;
