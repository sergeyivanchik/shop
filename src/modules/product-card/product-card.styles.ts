import styled from 'styled-components';

import { colors } from '@/constants';

import { Container } from '@/components';

const ProductCardStyled = styled(Container)`
  flex-direction: row;
  min-height: 424px;

  & > *:not(:last-child) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const InfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 386px;
  width: 100%;
  height: 380px;
`;

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleStyled = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.white};
`;

const PriceStyled = styled.span`
  margin-top: 10px;
  color: ${colors.gray100};
  font-size: 20px;
  font-weight: 700;
`;

const DescriptionStyled = styled.span`
  color: ${colors.gray200};
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  margin-top: 15px;
`;

const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const PurchasedStyled = styled.span`
  color: ${colors.gray700};
  font-size: 10px;
  font-weight: 500;
`;

export {
  ProductCardStyled,
  InfoStyled,
  TitleStyled,
  PriceStyled,
  DescriptionStyled,
  WrapperStyled,
  FooterStyled,
  ButtonsContainerStyled,
  PurchasedStyled,
};
