import { Sidebar } from '@/modules';

import { MainPageStyled, TopBlockStyled } from './main-page.styles';

const MainPage = () => {
  return (
    <MainPageStyled>
      <TopBlockStyled>
        <Sidebar />
      </TopBlockStyled>
    </MainPageStyled>
  );
};

export { MainPage };
