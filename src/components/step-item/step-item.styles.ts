import styled from 'styled-components';

interface StepItemStylesProps {
  grid: number;
}

export const StepItemStyles = styled.div<StepItemStylesProps>`
  width: calc(100% / ${(props) => props.grid});
  padding: ${(props) => props.theme.vars.gridGap / 2}px;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.vars.xlSpace}px;
  }

  header.step-item-header {
    margin-bottom: ${(props) => props.theme.vars.xsSpace}px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    hr {
      width: 100%;
      background-color: ${(props) => props.theme.colors.gray};
    }
  }
`;
