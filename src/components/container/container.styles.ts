import styled from 'styled-components';

import { colors } from '@/constants';

const ContainerStyled = styled.div`
  padding: 24px 22px;
  background: ${colors.black600};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export { ContainerStyled };
