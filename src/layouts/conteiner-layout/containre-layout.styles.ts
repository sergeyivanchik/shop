import styled from 'styled-components';

const ContainerLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const TopBlockStyled = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const WrapperStyled = styled.div`
  height: max-content;
`;

export { TopBlockStyled, ContainerLayoutStyled, WrapperStyled };
