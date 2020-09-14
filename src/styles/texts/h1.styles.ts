import styled from 'styled-components';

interface H1StylesProps {
  fontSize?: number;
  lineHeight?: number;
  mb?: number;
  color?: string;
}

export const H1Styles = styled.h1<H1StylesProps>`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  margin-bottom: ${(props) => props.mb}px;
  color: ${(props) => props.color ? props.color : props.theme.colors.myBlack};

  span {
    color: ${(props) => props.theme.colors.gray};
  }
`;

H1Styles.defaultProps = {
  fontSize: 100,
  lineHeight: 124,
  mb: 90,
};
