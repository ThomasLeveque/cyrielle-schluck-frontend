import styled from 'styled-components';

interface RecoItemStylesProps {
  asUrl: boolean;
}

export const RecoItemStyles = styled.ul<RecoItemStylesProps>`
  h3 {
    letter-spacing: 1px;
    font-weight: 400;
    font-style: italic;

    span.quote {
      font-family: ${(props) => props.theme.fonts.mainFont};
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;

      &:first-of-type {
        margin-right: 10px;
      }

      &:last-of-type {
        margin-left: 10px;
      }
    }
  }

  p {
    color: ${(props) => props.theme.colors.myBlack};

    a {
      cursor: ${(props) => (props.asUrl ? 'pointer' : 'initial')};
      text-decoration: ${(props) => (props.asUrl ? 'underline' : 'none')};
    }
  }
`;
