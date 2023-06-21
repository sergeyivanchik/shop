import styled from 'styled-components';

import { colors } from '@/constants';

import { Container } from '@/components';

const CategoriesStyled = styled(Container)`
  min-height: 370px;
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

export { CategoriesStyled, TitleStyled, ContainerStyled };
