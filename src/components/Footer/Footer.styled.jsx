import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const FooterContainer = styled.footer`
	height: ${pxToRem(190)};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: ${({ theme }) => theme.colors.shadowBox};
	background-color: ${({ theme }) => theme.colors.body};
`;

export const Subtitle = styled.h2`
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.titles};
	margin-bottom: ${({ theme }) => theme.margins.marginInside};
	text-align: center;
`;

export const Copy = styled.p`
	font-size: ${({ theme }) => theme.sizes.text};
	font-family: ${({ theme }) => theme.fonts.titles};
`;
