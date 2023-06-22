import { FC } from 'react';

import { useImage } from '@/hooks';

import { ICategoryProps } from './category.types';

import { CategoryStyled, ImageStyled, TitleStyled } from './category.styles';

const Category: FC<ICategoryProps> = ({ id, name, image }) => {
  const { src } = useImage(image);

  return (
    <CategoryStyled to={`/categories/${id}`}>
      <ImageStyled url={src} />
      <TitleStyled>{name}</TitleStyled>
    </CategoryStyled>
  );
};

export { Category };
