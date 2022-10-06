import { createGlobalStyle, css } from 'styled-components';

export const pxToRem = (...values) => {
	return values
		.reduce((acc, current) => (acc += current / 16 + `rem `), '')
		.trim();
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
        scrollbar-width: auto;
        scrollbar-color: ${({ theme }) => theme.colors.brand} transparent;
    }

    html {
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
        width: ${pxToRem(8)};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.bgNavbar};

    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.brand};
        border-radius: 7px;
    }

    html, body, #root, .App {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
    body {
        font-family: 'Source Serif Pro', serif;
        font-weight: 400;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.sizes.text};
        letter-spacing: 1px;
        line-height: 1.1;
    }
    button {
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
    }
    button:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.brand};
        text-decoration: 2px underline;
        font-family: ${({ theme }) => theme.fonts.titles};
        cursor: pointer;
        width: fit-content;

        &:hover {
            /* filter: contrast(3); */
        }

    }


    input::placeholder,
    textarea::placeholder {
        font-family: ${({ theme }) => theme.fonts.body};
        color: ${({ theme }) => theme.colors.text};

    }

    input:focus {
        outline: none;
        background-color: ${({ theme }) => theme.colors.input};
        box-shadow: ${({ theme }) => theme.colors.shadowBoxDown};
    }

    .error {
        color: ${({ theme }) => theme.colors.errorText};
        font-weight: 600;
        background-color: ${({ theme }) => theme.colors.errorBg};
        padding: 15px 20px;
        border-radius: 7px;
        animation: slide 0.5s ease-in-out;
    }

    @keyframes slide {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }    
    }

    .success {
        color: ${({ theme }) => theme.colors.successText};
        font-weight: 600;
        background-color: ${({ theme }) => theme.colors.successBg};
        padding: 5px 10px;
        border-radius: 7px;
    }


    .button__link {
        width: ${pxToRem(70)};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${pxToRem(8)};
        border-radius: 0 7px 7px 0;
        margin-left: -12px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.body};
        font-size: ${({ theme }) => theme.sizes.text};
        background-color: ${({ theme }) => theme.colors.brand};
        padding: ${({ theme }) => theme.padding.paddingInside + '0'};
        border: 2px solid ${({ theme }) => theme.colors.brand};
        transition: all 0.3s ease-in-out;

        &:hover {
            background: transparent;
            color: ${({ theme }) => theme.colors.brand};
            box-shadow: ${({ theme }) => theme.colors.shadowBox};
	    }

    }


`;
