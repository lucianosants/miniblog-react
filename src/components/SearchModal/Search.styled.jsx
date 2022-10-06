import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const SearchModalContainer = styled.div`
	display: flex;
	box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
	background: ${({ theme }) => theme.colors.bgNavbar};
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 6;
`;

export const ModalContainer = styled.div`
	height: ${pxToRem(300)};
	max-width: ${pxToRem(500)};
	margin: 0 auto;
	width: ${({ theme }) => theme.sizes.maxWidth};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	position: absolute;
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.borderColor};
	padding: ${pxToRem(18)};

	box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
	background: ${({ theme }) => theme.colors.bgNavbar};
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);

	@media (max-width: 768px) {
		width: ${pxToRem(330)};
		height: ${pxToRem(210)};
	}
`;

export const HeaderModal = styled.div`
	position: relative;
	margin-block: ${pxToRem(22) + ' ' + '10%'};
	width: 100%;
	justify-content: flex-end;
	display: flex;

	svg {
		stroke: ${({ theme }) => theme.colors.brand};
		transition: 0.3s;

		&:hover {
			stroke: ${({ theme }) => theme.colors.text};
		}
	}
`;
