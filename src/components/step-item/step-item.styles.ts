import { down } from 'styled-breakpoints';
import styled from 'styled-components';

interface StepItemStylesProps {
  grid: number;
}

export const StepItemStyles = styled.article<StepItemStylesProps>`
  width: calc(100% / ${(props) => props.grid});
  padding: ${(props) => props.theme.vars.gridGap / 2}px;

  ${down('mobile')} {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.vars.xlSpace}px;

    ${down('mobile')} {
      margin-bottom: ${(props) => props.theme.vars.lSpace}px;
    }
  }

  header.step-item-header {
    margin-bottom: ${(props) => props.theme.vars.xsSpace}px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    h5 {
      ${down('mobile')} {
        margin-bottom: 15px;
      }
    }

    hr {
      width: 100%;
      background-color: ${(props) => props.theme.colors.gray};
    }
  }
`;
