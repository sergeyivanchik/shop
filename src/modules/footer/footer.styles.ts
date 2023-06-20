import styled, { css } from 'styled-components';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';

import { IContainerStyled } from './footer.types';

const FooterStyled = styled.div`
  padding: 24px;
  background-color: ${colors.black600};
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 24px;
`;

const ContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const CONTAINER_MODIFIERS = {
  left: () => css`
    justify-content: flex-start;
  `,
  right: () => css`
    justify-content: flex-end;
  `,
};

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:last-child {
    @media (max-width: 451px) {
      margin-top: 10px;
    }
  }
`;

const ContainerStyled = styled.div<IContainerStyled>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${applyStyleModifiers(CONTAINER_MODIFIERS)};
`;

const DeveloperContainerStyled = styled.div`
  color: ${colors.gray700};
  font-weight: 500;
`;

const DeveloperStyled = styled.span`
  color: ${colors.purple600};
  font-weight: 600;
`;

export {
  FooterStyled,
  ContentStyled,
  DeveloperContainerStyled,
  DeveloperStyled,
  ContainerStyled,
  WrapperStyled,
};
