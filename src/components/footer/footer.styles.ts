import styled from 'styled-components';
import { rgba, border, math } from 'polished';
import { only, down } from 'styled-breakpoints';

export const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${(props) => props.theme.vars.footerHeight}px;
  background: ${(props) => props.theme.colors.white};
  ${(props) =>
    border(
      'top',
      `${props.theme.vars.footerBorderSize}px`,
      'solid',
      rgba(props.theme.colors.gray, 0.2)
    )}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.vars.lSpace}px;

  ${only('tablet')} {
    padding: 0 ${(props) => props.theme.vars.sSpace}px;
  }

  ${down('mobile')} {
    padding: 0;
  }

  button {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    transition: 0.3s ease-out;
    margin-top: ${(props) => math(`${props.theme.vars.footerBorderSize}px / 2`)};

    ${only('tablet')} {
      font-size: 13px;
    }

    &:hover {
      color: ${(props) => props.theme.colors.myBlack};
    }
  }

  p {
    padding: 0 ${(props) => props.theme.vars.xsSpace}px;
    margin-top: ${(props) => math(`${props.theme.vars.footerBorderSize}px / 2`)};
    text-align: center;

    ${only('tablet')} {
      font-size: 15px;
    }

    ${down('mobile')} {
      font-size: 14px;
      width: 100%;
    }

    span {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
