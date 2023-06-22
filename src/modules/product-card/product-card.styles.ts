import styled from 'styled-components';

import { Container } from '@/components';

const ProductCardStyled = styled(Container)`
  flex-direction: row;
  min-height: 424px;

  & > *:not(:last-child) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

export { ProductCardStyled };
