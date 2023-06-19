import { FC, PropsWithChildren } from 'react';

import { Header } from '@/modules';

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
        <div>FOOTER</div>
      </WrapperStyled>
    </MainLayoutStyled>
  );
};

export { MainLayout };
