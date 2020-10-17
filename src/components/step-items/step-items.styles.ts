import styled from 'styled-components';

export const StepItemsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${(props) => props.theme.vars.gridGap / 2}px;
`;
