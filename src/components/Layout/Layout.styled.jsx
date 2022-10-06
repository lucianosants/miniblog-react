import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const Container = styled.main`
	min-height: 90vh;
	margin-bottom: ${pxToRem(80)};
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	margin: 0 auto;
	padding: ${({ theme }) =>
		theme.sizes.navbarHeight + ' ' + theme.padding.paddingInside};
`;
