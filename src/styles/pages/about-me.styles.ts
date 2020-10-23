import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const AboutMeStyles = styled.div`
  padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;

  img {
    width: 200px;
    margin-bottom: ${(props) => props.theme.vars.lSpace}px;

    ${down('mobile')} {
      width: 130px;
      margin-bottom: ${(props) => props.theme.vars.sSpace}px;
    }
  }

  h1 {
    ${down('tablet')} {
      font-size: 70px;
    }

    ${down('mobile')} {
      font-size: 30px;
      margin-bottom: ${(props) => props.theme.vars.sSpace}px;
    }
  }

  .with-text-list > div {
    ${down('mobile')} {
      font-size: 16px;
      margin-bottom: ${(props) => props.theme.vars.lSpace}px;
    }
  }

  div.buttons {
    display: flex;
    flex-direction: row;

    button:last-child {
      margin-left: ${(props) => props.theme.vars.lSpace}px;

      ${down('mobile')} {
        margin-top: ${(props) => props.theme.vars.sSpace}px;
        margin-left: 0;
      }
    }

    ${down('mobile')} {
      flex-direction: column;
    }
  }
`;
