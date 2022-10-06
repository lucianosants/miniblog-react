import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const Container = styled.div`
	margin: ${pxToRem(100) + ' auto'};
	width: ${pxToRem(420)};
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.margins.marginInside};
`;
