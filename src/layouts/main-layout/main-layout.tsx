import { FC, PropsWithChildren } from 'react';

import { ContentStyled, MainLayoutStyled } from './main-layout.styles';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainLayoutStyled>
      <ContentStyled>{children}</ContentStyled>
    </MainLayoutStyled>
  );
};

export { MainLayout };
