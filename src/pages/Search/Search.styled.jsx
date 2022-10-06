import styled from 'styled-components';

export const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => theme.padding.paddingInside + ' 0'};
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: ${({ theme }) => theme.padding.paddingInside + ' 0'};
`;
