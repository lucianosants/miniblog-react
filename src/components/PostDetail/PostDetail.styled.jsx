import styled from 'styled-components';
import { pxToRem } from '../../styles/GlobalStyles';

export const PostWrapper = styled.article`
	display: flex;
	flex-direction: column;
	margin-bottom: ${pxToRem(50)};
	border-bottom: 1px solid #ccc;
	padding-bottom: ${pxToRem(18)};

	a {
		width: ${pxToRem(50)};
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border-radius: 7px;
		font-weight: 700;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.body};
		font-size: ${({ theme }) => theme.sizes.text};
		background-color: ${({ theme }) => theme.colors.brand};
		padding: ${pxToRem(10)} ${({ theme }) => theme.padding.paddingInside};
		border: 2px solid ${({ theme }) => theme.colors.brand};
		transition: all 0.3s ease-in-out;
		margin-top: ${pxToRem(20)};

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
	}
`;

export const ImageContainerPost = styled.div`
	margin-bottom: ${({ theme }) => theme.margins.marginInside};
`;

export const Thumbnail = styled.img`
	max-width: ${pxToRem(800)};
	max-height: ${pxToRem(800)};
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.borderColor};

	@media (max-width: 830px) {
		width: 100%;
	}
`;

export const TitleThumbnail = styled.h4`
	font-size: ${({ theme }) => theme.sizes.subTitles};
	font-family: ${({ theme }) => theme.fonts.titles};
	margin-bottom: ${({ theme }) => theme.margins.marginInside};
`;

export const HashTags = styled.div`
	display: flex;
	gap: ${pxToRem(8)};
	text-decoration: underline;
	margin-top: ${({ theme }) => theme.margins.marginInside};
	flex-wrap: wrap;
	max-width: ${pxToRem(400)};

	p {
		background-color: ${({ theme }) => theme.colors.bgHashTag};
		padding: ${pxToRem(5)} ${pxToRem(10)};
		border-radius: 7px;
	}
`;

export const Hash = styled.strong`
	font-weight: 700;
`;
