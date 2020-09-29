import styled from 'styled-components';

interface HeadingStylesProps {
  fontSize?: number;
  lineHeight?: number;
  mb?: number;
  color?: string;
}

export const HeadingStyles = styled.h1<HeadingStylesProps>`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  margin-bottom: ${(props) => props.mb}px;
  color: ${(props) => (props.color ? props.color : props.theme.colors.myBlack)};

  span.color-gray {
    color: ${(props) => props.theme.colors.gray};
  }
`;

HeadingStyles.defaultProps = {
  fontSize: 100,
  lineHeight: 124,
  mb: 90,
};
