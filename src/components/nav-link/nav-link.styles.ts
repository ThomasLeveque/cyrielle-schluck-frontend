import styled from 'styled-components';

export const NavLinkAStyles = styled.a`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    span {
      transform: translateX(100%);
    }
  }

  &.active {
    span {
      background-color: ${(props) => props.theme.colors.mainColor};
    }
  }

  span {
    margin-top: 8px;
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.myBlack};
    transition: transform 0.5s ease-out;
  }
`;
