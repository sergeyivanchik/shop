import { FC } from 'react';

import { useImage } from '@/hooks';

import { ISmallImageProps } from './small-image.types';

import { SmallImageStyled } from './small-image.styles';

const SmallImage: FC<ISmallImageProps> = ({ image, active, onClick }) => {
  const { src } = useImage(image);

  const hasActiveMode = active ? 'active' : undefined;

  return (
    <SmallImageStyled url={src} modifiers={hasActiveMode} onClick={onClick} />
  );
};

export { SmallImage };
