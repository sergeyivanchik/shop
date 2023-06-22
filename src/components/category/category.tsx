import { FC } from 'react';

import defaultImg from '@/assets/images/no-photo.png';

import { ICategoryProps } from './category.types';

import { CategoryStyled, ImageStyled, TitleStyled } from './category.styles';
import { useImage } from '@/hooks';

const Category: FC<ICategoryProps> = ({ id, name, image }) => {
  const { src } = useImage(image, defaultImg);

  return (
    <CategoryStyled to={`/categories/${id}`}>
      <ImageStyled url={src} />
      <TitleStyled>{name}</TitleStyled>
    </CategoryStyled>
  );
};

export { Category };
