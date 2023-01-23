import { createGlobalStyle } from 'styled-components';
import {GoClientsTechTheme} from "../theme";
import './_fonts.scss';


declare module 'styled-components' {
    export interface DefaultTheme extends GoClientsTechTheme {
    }
}

const GlobalStyle = createGlobalStyle`
  * { 
    font-family: 'SFProDisplay', system-ui;
    transition: all .25s ease;
    color: #3D3D3D;
  }
  html {
  }
  body {
    background: ${({theme}) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
  }
  #root {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .phone-button {
    background: none !important;
    border: none!important;
    top: 50% !important;
    display: flex;
    transform: translateY(-50%) !important;
    .selected-flag {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      padding: 0;
      width: unset;
      .flag {
        position: relative;
        top: unset;
        margin: 0;
      }
      .arrow {
        display: none;
      }
    }
  }
  .ck.ck-editor {
    display: flex;
    flex-direction: column;
    max-width: 548px;
    width: 100%;
    .ck-toolbar{
      border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
    }
    .ck-editor__main {
      height: 100%;
      .ck-content {
        height: 100%;
        border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
      }
    }
  }
`;

export default GlobalStyle;
