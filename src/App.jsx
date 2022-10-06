import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './config/theme';
import { ThemeAppProvider } from './context/ThemeSwitcher';

import Layout from './components/Layout';

function App() {
	const [theme, setTheme] = useState(darkTheme);
	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

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
