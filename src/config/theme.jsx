import { pxToRem } from '../styles/GlobalStyles';

export const lightTheme = {
	colors: {
		body: '#fff',
		text: 'rgba(0, 0, 0, 0.8)',
		shadowBox: '0px -2px 10px rgba(0, 0, 0, 0.15)',
		shadowBoxDown: '0px 2px 10px rgba(0, 0, 0, 0.15)',
		bgNavbar: 'rgba(255, 255, 255, 0.72)',
		bgHashTag: '#9796977d',
		borderColor: '#848484',
		brand: '#a677e7',
		errorBg: '#f5bcbc',
		errorText: '#fd6161',
		successBg: '#bce0b5',
		successText: '#4caf50',
		input: '#d2d2d2',
	},
	fonts: {
		body: 'Source Serif Pro, serif',
		titles: 'Oswald, sans-serif',
	},
	sizes: {
		titles: pxToRem(22),
		subTitles: pxToRem(18),
		text: pxToRem(16),
		maxWidth: pxToRem(1280),
		navbarHeight: pxToRem(60),
	},
	margins: {
		marginInside: pxToRem(18),
	},
	padding: {
		paddingInside: pxToRem(18),
	},
};

export const darkTheme = {
	colors: {
		body: '#131417',
		text: 'rgba(255, 255, 255, 0.8)',
		shadowBox: '0px -2px 10px rgba(255, 255, 255, 0.15)',
		shadowBoxDown: '0px 2px 10px rgba(255, 255, 255, 0.15)',
		bgNavbar: 'rgba(19, 20, 23, 0.72)',
		bgHashTag: '#9796977d',
		borderColor: '#848484',
		brand: '#a677e7',
		errorBg: '#fd6161',
		errorText: '#f5bcbc',
		successBg: '#bce0b5',
		successText: '#4caf50',
		input: '#535353',
	},
	fonts: {
		body: 'Source Serif Pro, serif',
		titles: 'Oswald, sans-serif',
	},
	sizes: {
		titles: pxToRem(22),
		subTitles: pxToRem(18),
		text: pxToRem(16),
		maxWidth: pxToRem(1280),
		navbarHeight: pxToRem(60),
	},
	margins: {
		marginInside: pxToRem(18),
	},
	padding: {
		paddingInside: pxToRem(18),
	},
};
