import styled from 'styled-components';

interface HeadingStylesProps {
  fontSize?: number;
  lineHeight?: number;
  mb?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  isUppercase?: boolean;
}

export const HeadingStyles = styled.h1<HeadingStylesProps>`
  font-family: ${(props) => props.fontFamily || props.theme.fonts.secondaryFont};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  margin-bottom: ${(props) => props.mb || props.theme.vars.xlSpace}px;
  color: ${(props) => (props.color ? props.color : props.theme.colors.myBlack)};
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'initial')};

  span.color-gray {
    color: ${(props) => props.theme.colors.gray};
  }
`;

HeadingStyles.defaultProps = {
  fontSize: 100,
  lineHeight: 124,
  fontWeight: 700,
  isUppercase: false,
};
