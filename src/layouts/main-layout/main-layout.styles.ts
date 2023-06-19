import styled from 'styled-components';

const MainLayoutStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 10px;
`;

const ContentStyled = styled.main`
  flex: 1;
  max-width: 1274px;
  margin: 0 auto;
`;

export { MainLayoutStyled, ContentStyled };
