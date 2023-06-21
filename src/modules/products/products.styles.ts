import styled from 'styled-components';

import { colors } from '@/constants';

import { Button, Container } from '@/components';

const ProductsStyled = styled(Container)`
  min-height: 378px;
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
