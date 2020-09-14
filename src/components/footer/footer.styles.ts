import styled from 'styled-components';
import { rgba, border, math } from 'polished';

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
  padding: 0 ${(props) => props.theme.vars.mSpace}px;

  button {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    transition: 0.3s ease-out;
    margin-top: ${(props) => math(`${props.theme.vars.footerBorderSize}px / 2`)};

    &:hover {
      color: ${(props) => props.theme.colors.myBlack};
    }
  }

  p {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    margin-top: ${(props) => math(`${props.theme.vars.footerBorderSize}px / 2`)};

    span {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
