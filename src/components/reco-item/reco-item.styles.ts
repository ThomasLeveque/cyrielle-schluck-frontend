import { down } from 'styled-breakpoints';
import styled from 'styled-components';

interface RecoItemStylesProps {
  asUrl: boolean;
}

export const RecoItemStyles = styled.article<RecoItemStylesProps>`
  h3 {
    font-style: italic;

    ${down('mobile')} {
      font-size: 18px;
    }

    span.quote {
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
