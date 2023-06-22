import styled, { css } from 'styled-components';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';

import { IButtonStyledProps } from './button.types';

const BUTTON_MODIFIERS = {
  disabled: () => css`
    pointer-events: none;
    background-color: ${colors.gray700};
  `,
};

const ButtonStyled = styled.div<IButtonStyledProps>`
  height: 38px;
  background-color: ${colors.purple600};
  border-radius: 6px;
  font-size: 16px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${colors.purple500};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export { ButtonStyled };
