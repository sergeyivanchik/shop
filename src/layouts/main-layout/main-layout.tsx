import { FC, PropsWithChildren } from 'react';

import { Footer, Header } from '@/modules';

import {
  ContentStyled,
  MainLayoutStyled,
  WrapperStyled,
} from './main-layout.styles';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainLayoutStyled>
      <WrapperStyled>
        <Header />
        <ContentStyled>{children}</ContentStyled>
        <Footer />
      </WrapperStyled>
    </MainLayoutStyled>
  );
};

export { MainLayout };
