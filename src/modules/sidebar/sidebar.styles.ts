import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';

import { ILinkStyledProps } from './sidebar.types';

const SidebarStyled = styled.div`
  max-width: 304px;
  width: 100%;
  background-color: ${colors.black600};
  border-radius: 6px;
  padding: 25px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const TitleStyled = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.white};
  text-transform: capitalize;
`;

const ContainerStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  max-height: 290px;
  min-height: 290px;
  height: 100%;
  display: flex;
  flex-direction: column;

  & {
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.gray700};
      border: 4px solid ${colors.black500};
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: transparent;
      border-radius: 2px;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 2px;
  }

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const LINK_MODIFIERS = {
  underline: () => css`
    text-decoration: underline;
  `,
  active: () => css`
    color: ${colors.purple500};
  `,
};

const LinkStyled = styled(Link)<ILinkStyledProps>`
  font-size: 14px;
  color: ${colors.gray700};
  transition: all 0.3s ease;
  display: block;

  &:hover {
    color: ${colors.purple500};
  }

  ${applyStyleModifiers(LINK_MODIFIERS)};
`;

const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  SidebarStyled,
  TitleStyled,
  ContainerStyled,
  LinkStyled,
  FooterStyled,
};
