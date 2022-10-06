import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: ${({ theme }) => theme.margins.marginInside};
	height: 50vh;
	margin: ${({ theme }) => theme.margins.marginInside} auto;

	a {
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

		&:hover {
			background: transparent;
			color: ${({ theme }) => theme.colors.brand};
			box-shadow: ${({ theme }) => theme.colors.shadowBox};
		}
	}

	.repo__code {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.brand};
		text-decoration: 2px underline;
		font-family: ${({ theme }) => theme.fonts.titles};
		cursor: pointer;
		width: fit-content;
		border: none;
		background: none;
		text-transform: none;

		&:hover {
			box-shadow: none;
		}
	}
`;
