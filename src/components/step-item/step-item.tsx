import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import ItemImages from '@components/item-images/item-images';
import { StepItem as StepItemType } from '@interfaces/project.interface';

import { StepItemStyles } from './step-item.styles';
import { PStyles } from '@styles/texts/p.styles';

interface StepItemProps {
  stepItem: StepItemType;
}

const StepItem: React.FC<StepItemProps> = ({ stepItem }) => {
  const theme = useContext(ThemeContext);

  return (
    <StepItemStyles className="row" grid={stepItem.grid}>
      {stepItem.title && (
        <header className="step-item-header">
          <PStyles
            as="h5"
            fontSize={12}
            lineHeight={15}
            mb={theme.vars.xsSpace}
            color={theme.colors.myBlack}
          >
            {stepItem.title}
          </PStyles>
          <hr />
        </header>
      )}
      <ItemImages itemImages={stepItem.itemImages} />
    </StepItemStyles>
  );
};

export default StepItem;
