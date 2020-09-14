import styled from 'styled-components';

interface PStylesProps {
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  letterSpacing?: number;
  mb?: number;
}

export const PStyles = styled.p<PStylesProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => (props.color ? props.color : props.theme.colors.gray)};
  line-height: ${(props) => props.lineHeight}px;
  letter-spacing: ${(props) => props.letterSpacing}px;
  margin-bottom: ${(props) => props.mb}px;
`;

PStyles.defaultProps = {
  fontSize: 22,
  lineHeight: 42,
  letterSpacing: 0,
  mb: 90,
};