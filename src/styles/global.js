import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #EFEFBB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #D4D3DD, #EFEFBB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-size: 14px;
    color: #000;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    }

    main {
        width: 1000px;
        background-color: transparent;
        height: auto;
        transition: width 0.5s ease-in-out;

        @media screen and (max-width: 1024px) {
            width: 700px;
        }

        @media screen and (max-width: 800px) {
            width: 600px;
        }

        @media screen and (max-width: 600px) {
            width: 90vw;
        }
    }
`;
