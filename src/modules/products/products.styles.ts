import styled from 'styled-components';

import { colors } from '@/constants';

import { Button } from '@/components';

const ProductsStyled = styled.div`
  padding: 24px 22px;
  background: ${colors.black600};
  border-radius: 6px;
  min-height: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const TitleStyled = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${colors.white};
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const ButtonStyled = styled(Button)`
  max-width: 114px;
`;

export { ProductsStyled, TitleStyled, ContainerStyled, ButtonStyled };
