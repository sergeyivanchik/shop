import styled from 'styled-components';

const MainLayoutStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 10px;
`;

const WrapperStyled = styled.div`
  max-width: 1274px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ContentStyled = styled.main`
  flex: 1;
`;

export { MainLayoutStyled, ContentStyled, WrapperStyled };
