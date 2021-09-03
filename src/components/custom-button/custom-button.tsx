import React, { useRef, useEffect, useState } from 'react';

import { CustomButtonStyles } from './custom-button.styles';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, ...props }) => {
  const subTextRef = useRef<HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  useEffect(() => {
    setButtonWidth(subTextRef?.current?.offsetWidth as number);
  }, [subTextRef]);

  return (
    <CustomButtonStyles width={buttonWidth} {...props}>
      <div className="text">
        <span>{text}</span>
      </div>
      <div className="sub-text" ref={subTextRef}>
        {text}
      </div>
    </CustomButtonStyles>
  );
};

export default CustomButton;
