import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const DashboardContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	margin: ${({ theme }) => theme.margins.marginInside} auto;

	a {
		display: block;
		width: fit-content;
		border-radius: 7px;
		font-weight: 700;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.body};
		font-size: ${({ theme }) => theme.sizes.text};
		background-color: ${({ theme }) => theme.colors.brand};
		padding: ${({ theme }) => theme.padding.paddingInside};
		border: 2px solid ${({ theme }) => theme.colors.brand};
		transition: all 0.3s ease-in-out;
		text-decoration: none;
		margin-top: ${pxToRem(18)};

		&:hover {
			background: transparent;
			color: ${({ theme }) => theme.colors.brand};
			box-shadow: ${({ theme }) => theme.colors.shadowBox};
		}
	}
`;

export const DashboardContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	row-gap: 50px;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const NoContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const PostCard = styled.div`
	box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
	border-radius: 7px;
	min-width: 45%;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.colors.body};

	&:hover {
		box-shadow: ${({ theme }) => theme.colors.shadowBox};
		border: 1px solid ${({ theme }) => theme.colors.borderColor};
	}
`;

export const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${({ theme }) => theme.margins.marginInside};
	border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
	padding-bottom: ${({ theme }) => theme.padding.paddingInside};

	img {
		width: 100px;
	}
`;

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const ImageContainer = styled.div`
	margin-left: ${({ theme }) => theme.margins.marginInside};
`;

export const MenuPost = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

	a,
	button {
		width: 100%;
		height: ${pxToRem(10)};
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 400px) {
			height: ${pxToRem(30)};
			width: 100%;
			padding: ${pxToRem(5, 10)};
			font-size: 12px;
		}
	}
`;
