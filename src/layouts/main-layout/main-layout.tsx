import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/modules';

import {
  ContentStyled,
  MainLayoutStyled,
  WrapperStyled,
} from './main-layout.styles';

const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <WrapperStyled>
        <Header />
        <ContentStyled>
          <Outlet />
        </ContentStyled>
        <Footer />
      </WrapperStyled>
    </MainLayoutStyled>
  );
};

export { MainLayout };
