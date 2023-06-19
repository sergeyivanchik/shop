import styled from 'styled-components';

import { colors } from '@/constants';

const SocialsStyled = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 18px;
  }

  svg {
    cursor: pointer;

    &:hover {
      path {
        fill: ${colors.purple600};
      }
    }
  }
`;

export { SocialsStyled };
