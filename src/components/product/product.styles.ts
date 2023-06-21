import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '@/constants';

import { IImageStyledProps } from './product.types';

const ProductStyled = styled(Link)`
  background: ${colors.black500};
  border-radius: 8px;
  overflow: hidden;
  width: 230px;
  height: 220px;
  display: block;
`;

const ImageStyled = styled.div<IImageStyledProps>`
  width: 100%;
  height: 110px;
  background: url(${({ url }) => url}) center / cover no-repeat;
`;

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 12px 8px;
  height: calc(100% - 110px);
`;

const TitleStyled = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 600;
  font-size: 15px;
  color: ${colors.white};
`;

const SubTitleStyled = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 500;
  font-size: 12px;
  color: ${colors.gray200};
  margin-top: 5px;
`;

const BottomStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceContainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${colors.purple600};
`;

const OldPriceStyled = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${colors.gray700};
  text-decoration-line: line-through;
  margin-left: 5px;
`;

const PurchasedStyled = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: ${colors.gray700};
`;

export {
  ProductStyled,
  ImageStyled,
  WrapperStyled,
  TitleStyled,
  SubTitleStyled,
  BottomStyled,
  PriceContainerStyled,
  PriceStyled,
  OldPriceStyled,
  PurchasedStyled,
};
