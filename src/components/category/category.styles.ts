import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IImageStyledProps } from './category.types';

import { colors } from '@/constants';

const CategoryStyled = styled(Link)`
  overflow: hidden;
  width: 230px;
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageStyled = styled.div<IImageStyledProps>`
  width: 100%;
  height: 230px;
  background: url(${({ url }) => url}) center / cover no-repeat;
`;

const TitleStyled = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 600;
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
`;

export { CategoryStyled, ImageStyled, TitleStyled };
