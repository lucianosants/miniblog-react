import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const PostWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: ${pxToRem(800)};
	margin: 0 auto;
	margin-block: ${({ theme }) => theme.margins.marginInside};
`;
