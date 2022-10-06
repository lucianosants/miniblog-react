import styled from 'styled-components';

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fonts.titles};
	margin: ${({ theme }) => theme.margins.marginInside + ' 0'};
`;

export const Subtitle = styled.p`
	margin-bottom: ${({ theme }) => theme.margins.marginInside};
`;

export const Text = styled.p`
	margin: ${({ theme }) => theme.margins.marginInside} 0;
`;
