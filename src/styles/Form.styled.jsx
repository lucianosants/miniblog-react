import styled from 'styled-components';
import { pxToRem } from './GlobalStyles';

export const FormContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block: ${({ theme }) => theme.margins.marginInside};
`;

export const Form = styled.form`
	max-width: ${pxToRem(523)};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.margins.marginInside};
`;

export const LabelFor = styled.label`
	width: 100%;
	margin: 0 auto;
`;

export const InputContainer = styled.div`
	position: relative;

	svg {
		position: absolute;
		top: ${pxToRem(18)};
		left: ${pxToRem(18)};
	}

	svg.icon__success {
		position: absolute;
		top: ${pxToRem(18)};
		left: ${pxToRem(490)};
		right: 0;
		stroke: #4caf50;
	}

	svg.icon__success--password {
		position: absolute;
		top: ${pxToRem(18)};
		left: ${pxToRem(490)};
		right: 0;
		stroke: #4caf50;
	}

	input {
		width: 100%;
		padding: ${({ theme }) => theme.padding.paddingInside};
		padding-left: ${pxToRem(45)};
		font-size: ${({ theme }) => theme.sizes.text};
		background-color: ${({ theme }) => theme.colors.input};
		border: 2px solid ${({ theme }) => theme.colors.input};
		border-radius: 7px;
		color: ${({ theme }) => theme.colors.text};

		&:focus {
			box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
			outline: none;
			background-color: ${({ theme }) => theme.colors.body};
		}
	}
`;

export const BodyInput = styled.textarea`
	width: 100%;
	height: 200px;
	padding: ${({ theme }) => theme.padding.paddingInside};
	padding-left: ${pxToRem(45)};
	font-size: ${({ theme }) => theme.sizes.text};
	background-color: ${({ theme }) => theme.colors.input};
	border: 2px solid ${({ theme }) => theme.colors.input};
	border-radius: 7px;
	resize: none;
	color: ${({ theme }) => theme.colors.text};

	&:focus {
		box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
		outline: none;
		background-color: transparent;
	}
`;

export const WrapperInputSearch = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ theme }) => theme.margins.marginInside};
`;

export const ImagePreview = styled.img`
	max-width: inherit;
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const ImagePreviewContainer = styled.div`
	max-width: 100%;
`;
