import { createGlobalStyle } from 'styled-components';
import { between, down } from 'styled-breakpoints';
import reset from 'styled-reset';
import { math } from 'polished';

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

  input:focus,
  textarea:focus,
  select:focus,
  a:focus,
  button:focus {
    outline: none;
  }

  body {
    font-family: ${(props) => props.theme.fonts.mainFont};
    font-size: ${(props) => props.theme.vars.bodyFontSize}px;
    color: ${(props) => props.theme.colors.myBlack};
    background-color: ${(props) => props.theme.colors.lightGray};
    overscroll-behavior-y: none;
  }

  img {
    display: block;
  }

  hr {
    margin: 0;
    padding: 0;
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

  .full-width {
    margin-left: -${(props) => props.theme.vars.xlSpace}px;
    margin-right: -${(props) => props.theme.vars.xlSpace}px;
    padding-left: ${(props) => props.theme.vars.xlSpace}px;
    padding-right: ${(props) => props.theme.vars.xlSpace}px;

    ${between('tablet', 'desktop')} {
      margin-left: -${(props) => props.theme.vars.lSpace}px;
      margin-right: -${(props) => props.theme.vars.lSpace}px;
      padding-left: ${(props) => props.theme.vars.lSpace}px;
      padding-right: ${(props) => props.theme.vars.lSpace}px;
    }

    ${down('mobile')} {
      margin-left: -${(props) => props.theme.vars.sSpace}px;
      margin-right: -${(props) => props.theme.vars.sSpace}px;
      padding-left: ${(props) => props.theme.vars.sSpace}px;
      padding-right: ${(props) => props.theme.vars.sSpace}px;
    }
  }

  .secure-bottom-space {
    padding-bottom: ${(props) => math(`${props.theme.vars.xlSpace}px + ${props.theme.vars.footerHeight}px`)};

    ${down('tablet')} {
      padding-bottom: ${(props) => math(`${props.theme.vars.lSpace}px + ${props.theme.vars.footerHeight}px`)};
    }

    ${down('mobile')} {
      padding-bottom: ${(props) => math(`${props.theme.vars.mSpace}px + ${props.theme.vars.footerHeight}px`)};
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    margin: -${(props) => props.theme.vars.gridGap / 2}px;
  }

  .row {
    padding: ${(props) => props.theme.vars.gridGap / 2}px;
  }
`;
