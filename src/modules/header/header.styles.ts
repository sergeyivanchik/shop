import styled from 'styled-components';

const HeaderStyled = styled.div`
  padding: 20px;
`;

const ContentStyled = styled.div`
  display: flex;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export { HeaderStyled, ContentStyled };
