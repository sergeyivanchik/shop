import styled, { css } from 'styled-components';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';

import { ISmallImageStyledProps } from './small-image.types';

const SMALL_IMAGE_MODIFIERS = {
  active: () => css`
    pointer-events: none;
    border: 4px solid ${colors.purple600};
  `,
};

const SmallImageStyled = styled.div<ISmallImageStyledProps>`
  height: 90px;
  width: 90px;
  background: url(${({ url }) => url}) center / cover no-repeat;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    border: 4px solid ${colors.purple600};
  }

  ${applyStyleModifiers(SMALL_IMAGE_MODIFIERS)};
`;

export { SmallImageStyled };
