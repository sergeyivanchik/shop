import { FC } from 'react';

import { ICategoriesProps } from './categories.types';

import { Category, Loading } from '@/components';

import {
  CategoriesStyled,
  ContainerStyled,
  TitleStyled,
} from './catefories.styles';

const Categories: FC<ICategoriesProps> = ({ loading, title, categories }) => {
  const hasLoading = loading && <Loading />;
  const hasCategories = !loading && !!categories.length && (
    <ContainerStyled>
      {categories.map((c) => (
        <Category {...c} key={c.id} />
      ))}
    </ContainerStyled>
  );

  return (
    <CategoriesStyled>
      <TitleStyled>{title}</TitleStyled>
      {hasLoading}
      {hasCategories}
    </CategoriesStyled>
  );
};

export { Categories };
