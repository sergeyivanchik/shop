import styled from 'styled-components';

import { colors } from '@/constants';

import { Button } from '@/components/button';

const BigSaleStyled = styled.div`
  padding: 30px;
  background: ${colors.black600};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 424px;
`;

const TitleStyled = styled.span`
  font-size: 112px;
  font-weight: 900;
  text-transform: uppercase;
  color: ${colors.black500};
`;

const SubTitleStyled = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.gray600};
  margin-top: 20px;
`;

const NameStyled = styled.div`
  font-weight: 700;
  font-size: 42px;
  text-transform: uppercase;
  color: ${colors.gray100};
`;

const ImageStyled = styled.img`
  position: absolute;
  right: 40px;
  bottom: -20px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 24px;
  max-width: 114px;
`;

export {
  BigSaleStyled,
  TitleStyled,
  SubTitleStyled,
  NameStyled,
  ImageStyled,
  ButtonStyled,
};
