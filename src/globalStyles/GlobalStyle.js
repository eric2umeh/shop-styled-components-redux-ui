import { createGlobalStyle } from "styled-components";
import resetStyle from './resetStyle';

const breakpoints = {
    desktop: '920px',
}

const GlobalStyle = createGlobalStyle`
    html {
        --color-dark: #555;
        --color-dark-rgb: 68,68,68;
        --color-dark-contrast: #f6f6f6;
        --color-dark-hover: #222;
        --color-light: #ffffff;
        --color-light-rgb: 246,246,246;
        --color-light-contrast: var(--color-dark);
        --color-light-hover: #eee;
        --color-gray: #949494;
        --color-gray-contrast: var(--color-light);
        --color-lightgray: #bbb;
        --color-lightgray-contrast: var(--color-light);
        --color-primary: #ff6358;
        --color-primary-rgb: 255,99,88;
        --color-primary-contrast: var(--color-light);
        --color-primary-hover: #e65a50;
        --color-secondary: #03a9f4;
        --color-secondary-rgb: 3,169,244;
        --color-secondary-contrast: var(--color-light); 
        --color-secondary-hover: #028ccc;
        --color-green: #37b400;
        --color-green-contrast: var(--color-light);
        --color-red: #f31700;
        --color-red-contrast: var(--color-light);
        --color-orange: #ffc000;
        --color-orange-contrast: var(--color-light);
        --color-blue: #4267b2;
        --color-blue-contrast: var(--color-light);
        --color-border: rgba(0,0,0, .08);
        --color-border-hover: rgba(0,0,0, .15);

        /* Default */
        --main-color: #4267b2;
        --txt-main-color: #000;
        --txt-second-color: #8d8d8d;
        --txt-white: #fff;
        --btn-main-bg: var(--main-color);
        --btn-main-color: #fff;
        
        --bradius-1: 3px;
        --bradius-2: 5px;
        --bradius-3: 8px;
        --bradius-4: 10px;
        --bradius-5: 13px;
        --bradius-6: 15px;
        --bradius-7: 20px;
        --bradius-8: 25px;
        --bradius-9: 30px;
        --bradius-10: 40px;

        --space-0: 0;
        --space-1: 5px;
        --space-2: 8px;
        --space-3: 12px;
        --space-4: 16px;
        --space-5: 22px;
        --space-6: 30px;
        --space-7: 36px;
        --space-7: 44px;
        --space-8: 60px;
        --space-9: 80px;
        --space-10: 110px;

        --roboto-font: 'Roboto', sans-serif;
        --opensans-font: 'Open Sans', sans-serif;
        --dancingscript-font: 'Dancing Script', cursive;
        --ralewaysans-font: 'Raleway', sans-serif;
        --calibri-font: 'Calibri';

        --fsize-1: 8px;
        --fsize-2: 9px;
        --fsize-3: 11px;
        --fsize-4: 13px;
        --fsize-5: 15px;
        --fsize-6: 20px;
        --fsize-7: 26px;
        --fsize-8: 36px;
        --fsize-9: 44px;
        --fsize-10: 55px;

        --fweight-1: 100;
        --fweight-2: 200;
        --fweight-3: 300;
        --fweight-4: 400;
        --fweight-5: 500;
        --fweight-6: 600;
        --fweight-7: 700;
        --fweight-8: 800;
        --fweight-9: 900;

        --height-input: var(--space-4);
        --height-button: var(--space-4);

        --header-height: 170px; 
        --header-tablet-height: 70px;
        --header-mobile-height: 40px;
        --header-shrink-height: 70px;

        --webkitboxshadow-primary: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
        --boxshadow-primary: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    ${resetStyle}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }

    body {
        font-size: var(--fsize-4);
        font-family: var(--roboto-font);
    }

    h1, h2, h3, h4, h4, h5, h6 {
        font-weight: 500;
    }

    h1 {
        font-size: var(--fsize-9);
    }
    h2 {
        font-size: var(--fsize-8);
    }
    h3 {
        font-size: var(--fsize-7);
    }
    h4 {
        font-size: var(--fsize-6);
    }
    h5 {
        font-size: var(--fsize-5);
    }
    h6 {
        font-size: var(--fsize-4);
    }
    p {
        font-size: var(--fsize-4);
        margin: 15px 0;
    }
    a {
        text-decoration: none;
        color: unset;
    }
    a:hover {
        text-decoration: none;
        color: var(--main-color);
    }
    a:active, a:focus {
        outline: 0;
        border: none;
        /* -moz-outline-style: none; */
    }
    img {
        max-width: 100%;
    }
    ul {
        list-style-type: none;
    }
    ul:hover {
        text-decoration: none;
    }
    textarea {
        min-width: 220px;
        min-height: 120px;
    }

    .section {
        margin-bottom: 80px;

        & > * ~ * {
            margin-top: 70px;
        }

        .section__title {
            font-size: 2rem;
            text-transform: capitalize;
            text-align: center;
        }
    }
`;

export default GlobalStyle;

export { breakpoints }