import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ILogoStyledProps } from './logo.types';

const LogoStyled = styled(Link)<ILogoStyledProps>`
  max-width: ${({ $width }) => `${$width}px`};
  min-width: ${({ $width }) => `${$width}px`};
  display: inline-block;
  width: 100%;
`;

const ImgStyled = styled.img`
  display: block;
  width: 100%;
`;

export { LogoStyled, ImgStyled };
