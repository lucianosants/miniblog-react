import styled from 'styled-components';

export const HomeContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	margin: ${({ theme }) => theme.margins.marginInside} auto;
	text-align: left;
`;

export const PostsContainer = styled.div`
	margin: ${({ theme }) => theme.margins.marginInside + ' 0'};
`;
