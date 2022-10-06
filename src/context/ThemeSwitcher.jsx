import {
	useContext,
	createContext,
	useState,
	useCallback,
	useEffect,
} from 'react';

export const ThemeAppContext = createContext();

import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../config/theme';

export function ThemeAppProvider({ children }) {
	const [theme, setTheme] = useState('light');
	const [toggleIcon, setToggleIcon] = useState('icon_sun');

	const toggleTheme = useCallback(() => {
		if (theme === 'light') {
			setTheme('dark');
			setToggleIcon('icon_moon');
			localStorage.setItem('THEME_APP_CHOSEN', JSON.stringify('dark'));
			localStorage.setItem(
				'ICON_TO_NEXT_THEME',
				JSON.stringify('icon_moon')
			);
		} else {
			setTheme('light');
			setToggleIcon('icon_sun');
			localStorage.setItem('THEME_APP_CHOSEN', JSON.stringify('light'));
			localStorage.setItem(
				'ICON_TO_NEXT_THEME',
				JSON.stringify('icon_sun')
			);
		}
	}, [theme]);

	useEffect(() => {
		const localTheme = localStorage.getItem('THEME_APP_CHOSEN');
		const localIcon = localStorage.getItem('ICON_TO_NEXT_THEME');

		localTheme && setTheme(JSON.parse(localTheme));
		localIcon && setToggleIcon(JSON.parse(localIcon));
	}, []);

	return (
		<ThemeAppContext.Provider value={{ theme, toggleTheme, toggleIcon }}>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				{children}
			</ThemeProvider>
		</ThemeAppContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeAppContext);
}
