import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const NavbarContainer = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 5;
	box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
	height: ${({ theme }) => theme.sizes.navbarHeight};
	background: ${({ theme }) => theme.colors.bgNavbar};
	backdrop-filter: blur(8.8px);
	-webkit-backdrop-filter: blur(8.8px);
`;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.padding.paddingInside};
	height: 100%;

	.__brand {
		font-family: ${({ theme }) => theme.fonts.titles};
		font-size: ${({ theme }) => theme.sizes.titles};

		&:hover {
			filter: opacity(0.8);
		}
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.text};
	}
`;

export const Brand = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(8)};

	button {
		color: ${({ theme }) => theme.colors.text};
		display: flex;

		@media (min-width: 830px) {
			display: none;
		}
	}
`;

export const Strong = styled.strong`
	color: ${({ theme }) => theme.colors.brand};
	text-transform: uppercase;
`;

export const NavList = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	gap: ${({ theme }) => theme.margins.marginInside};

	@media (max-width: 830px) {
		display: none;
	}
`;

export const NavListButton = styled(NavList)`
	display: flex;
	button {
		color: ${({ theme }) => theme.colors.text};
	}

	@media (min-width: 830px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	position: relative;
	z-index: 2;
	cursor: pointer;
	padding: ${pxToRem(0) + ' ' + pxToRem(10)};

	a {
		font-weight: 600;
		padding: ${pxToRem(5) + ' ' + pxToRem(10)};
	}

	a.active {
		color: ${({ theme }) => theme.colors.brand};
		border-bottom: 2px solid ${({ theme }) => theme.colors.brand};
	}

	&::before {
		width: 0%;
		height: 100%;
		content: '';
		z-index: -1;
		position: absolute;
		top: ${pxToRem(-5)};
		left: 0;
		border-radius: 7px;
		background-color: ${({ theme }) => theme.colors.brand};
	}

	&:hover:before {
		animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
			both;
		padding: ${pxToRem(5) + ' ' + pxToRem(0)};
	}

	&:hover a {
		color: #fff;
		text-decoration: none;
	}

	@keyframes scale-up-hor-left {
		0% {
			-webkit-transform: scaleX(0.4);
			transform: scaleX(0.4);
			-webkit-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
		}
		100% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1);
			-webkit-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			width: 100%;
		}
	}
`;
