import React from 'react';

import StepItem from '@components/step-item/step-item';
import { StepItem as StepItemType } from '@interfaces/project.interface';

import { StepItemsStyles } from './step-items.styles';

interface StepItemsProps {
  stepItems: StepItemType[];
}

const StepItems: React.FC<StepItemsProps> = ({ stepItems }) => {
  return (
    <StepItemsStyles className="container">
      {stepItems.map((stepItem: StepItemType) => (
        <StepItem key={stepItem.id} stepItem={stepItem} />
      ))}
    </StepItemsStyles>
  );
};

export default StepItems;
