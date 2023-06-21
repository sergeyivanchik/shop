import { FC } from 'react';

import { ICategoryProps } from './category.types';

import { CategoryStyled, ImageStyled, TitleStyled } from './category.styles';

const Category: FC<ICategoryProps> = ({ id, name, image }) => {
  return (
    <CategoryStyled to={`/categories/${id}`}>
      <ImageStyled url={image} />
      <TitleStyled>{name}</TitleStyled>
    </CategoryStyled>
  );
};

export { Category };
