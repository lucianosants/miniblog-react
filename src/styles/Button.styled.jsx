import styled from 'styled-components';
import { pxToRem } from './GlobalStyles';

export const Button = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${pxToRem(8)};
	border-radius: 7px;
	font-weight: 700;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.body};
	font-size: ${({ theme }) => theme.sizes.text};
	background-color: ${({ theme }) => theme.colors.brand};
	padding: ${({ theme }) => theme.padding.paddingInside};
	border: 2px solid ${({ theme }) => theme.colors.brand};
	transition: all 0.3s ease-in-out;

	span {
		font-size: ${({ theme }) => theme.sizes.text};
		display: flex;
		align-items: center;
	}

	&:hover {
		background: transparent;
		color: ${({ theme }) => theme.colors.brand};
		box-shadow: ${({ theme }) => theme.colors.shadowBox};
	}
`;

export const ButtonDelete = styled(Button)`
	background-color: ${({ theme }) => theme.colors.errorBg};
	border: 2px solid ${({ theme }) => theme.colors.errorBg};
	color: ${({ theme }) => theme.colors.errorText};

	@media (max-width: 400px) {
		width: 100%;
		padding: ${pxToRem(15, 10)};
		font-size: ${pxToRem(12)};
	}

	&:hover {
		color: #fb5858;
	}
`;

export const ButtonLogout = styled.button`
	padding: ${pxToRem(5, 10)};
	color: ${({ theme }) => theme.colors.brand};
	border-radius: 7px;
	font-size: ${({ theme }) => theme.sizes.text};
	font-weight: 700;
	border: 1px solid ${({ theme }) => theme.colors.brand};
	transition: 0.4s all ease;

	&:hover,
	svg:hover {
		color: ${({ theme }) => theme.colors.body};
		background-color: ${({ theme }) => theme.colors.brand};
	}
`;

export const ButtonSearch = styled.button`
	border: 1px solid ${({ theme }) => theme.colors.brand};
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 40px;
	transition: all 0.3s ease-in-out;
	clip-path: circle();

	&:hover {
		background-color: ${({ theme }) => theme.colors.brand};

		svg {
			fill: ${({ theme }) => theme.colors.body};
		}
	}

	svg {
		fill: ${({ theme }) => theme.colors.brand};
	}
`;

export const ButtonSwitchTheme = styled(ButtonSearch)`
	clip-path: circle();
`;
