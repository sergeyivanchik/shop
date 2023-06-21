import { FC } from 'react';

import { IContainerProps } from './container.types';

import { ContainerStyled } from './container.styles';

const Container: FC<IContainerProps> = ({ children, className }) => {
  return <ContainerStyled className={className}>{children}</ContainerStyled>;
};

export { Container };
