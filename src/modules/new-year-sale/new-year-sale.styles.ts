import styled from 'styled-components';

import { colors } from '@/constants';

import { IBlockStyled } from './new-year-sale.types';

import { Button } from '@/components';

const NewYearSaleStyled = styled.div`
  display: flex;
  width: 100%;
  height: 570px;
  background-color: ${colors.black600};
  border-radius: 6px;
`;

const LeftStyled = styled.div`
  width: 100%;
  position: relative;
  padding: 74px 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleStyled = styled.span`
  font-weight: 300;
  font-size: 70px;
  text-transform: uppercase;
  color: ${colors.purple600};
`;

const SubTitleStyled = styled.span`
  font-weight: 300;
  font-size: 150px;
  text-transform: uppercase;
  color: ${colors.purple600};
`;

const RightStyled = styled.div<IBlockStyled>`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url}) center / cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.black500};
  padding-bottom: 24px;
`;

const PercentageStyled = styled.span`
  font-weight: 700;
  color: ${colors.purple600};
`;

const ButtonStyled = styled(Button)`
  max-width: 114px;
  margin-top: 30px;
`;

const ShoeStyled = styled.img`
  position: absolute;
  bottom: 74px;
  left: -25px;
`;

const NintendoStyled = styled.img`
  position: absolute;
  bottom: -24px;
  right: -17px;
`;

export {
  NewYearSaleStyled,
  RightStyled,
  LeftStyled,
  PercentageStyled,
  TitleStyled,
  SubTitleStyled,
  ButtonStyled,
  ShoeStyled,
  NintendoStyled,
};
