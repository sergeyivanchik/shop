import styled from 'styled-components';

import { colors } from '@/constants';

const ButtonStyled = styled.div`
  height: 38px;
  background-color: ${colors.purple600};
  border-radius: 6px;
  font-size: 16px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: ${colors.purple500};
    cursor: pointer;
  }
`;

export { ButtonStyled };
