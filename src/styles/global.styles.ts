import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  /* RESET */
  ${reset}
  
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
    cursor: pointer;
  }
  /* Fix antialiasing */
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Disable user select on everything but texts */
  *, *:before, *:after {
    user-select: none;
  }
  p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea {
    user-select: text;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  textarea,
  select {
    font: inherit;
    outline: none;
  }

  body {
    font-family: ${(props) => props.theme.fonts.mainFont};
    font-size: ${(props) => props.theme.vars.bodyFontSize}px;
    color: ${(props) => props.theme.colors.myBlack};
    background-color: ${(props) => props.theme.colors.lightGray};
    overscroll-behavior-y: none;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }
  
  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .with-text-list {
    li {
      &:before {
        content: '- ';
      }
    }
  }
`;
