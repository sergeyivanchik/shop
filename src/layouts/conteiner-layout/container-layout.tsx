import { FC, useRef } from 'react';
import { useSize } from 'ahooks';

import { IContentLayoutProps } from './container-layout.types';

import { Sidebar } from '@/modules';

import {
  ContainerLayoutStyled,
  TopBlockStyled,
  WrapperStyled,
} from './containre-layout.styles';

const ContainerLayout: FC<IContentLayoutProps> = ({
  children,
  topComponent: TopComponent,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);

  const maxHeight = (size?.height || 0) - 50 - 84;

  return (
    <ContainerLayoutStyled>
      <TopBlockStyled>
        <Sidebar maxHeight={maxHeight} />
        <WrapperStyled ref={ref}>
          <TopComponent />
        </WrapperStyled>
      </TopBlockStyled>
      {children}
    </ContainerLayoutStyled>
  );
};

export { ContainerLayout };
