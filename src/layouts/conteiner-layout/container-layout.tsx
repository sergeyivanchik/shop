import { FC } from 'react';

import { IContentLayoutProps } from './container-layout.types';

import { Sidebar } from '@/modules';

import {
  ContainerLayoutStyled,
  TopBlockStyled,
} from './containre-layout.styles';

const ContainerLayout: FC<IContentLayoutProps> = ({
  children,
  topComponent: TopComponent,
}) => {
  return (
    <ContainerLayoutStyled>
      <TopBlockStyled>
        <Sidebar />
        <TopComponent />
      </TopBlockStyled>
      {children}
    </ContainerLayoutStyled>
  );
};

export { ContainerLayout };
