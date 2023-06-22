import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCategoriesQuery } from '@/store';

import { ISidebarProps } from './sidebar.types';

import { Loading } from '@/components';

import {
  SidebarStyled,
  TitleStyled,
  ContainerStyled,
  LinkStyled,
  FooterStyled,
} from './sidebar.styles';

const Sidebar: FC<ISidebarProps> = ({ maxHeight }) => {
  let { categoryId = '' } = useParams();

  const {
    data: categories,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery(null);

  const hasLoading = isLoading && <Loading />;
  const hasCategories =
    isSuccess &&
    categories?.map((cat) => (
      <LinkStyled
        to={`/categories/${cat.id}`}
        key={cat.id}
        modifiers={+categoryId === cat.id ? 'active' : undefined}
      >
        {cat.name}
      </LinkStyled>
    ));

  return (
    <SidebarStyled>
      <TitleStyled>CATEGORIES</TitleStyled>
      <ContainerStyled $maxHeight={maxHeight}>
        {hasLoading}
        {hasCategories}
      </ContainerStyled>
      <FooterStyled>
        <LinkStyled modifiers="underline" to="/">
          Help
        </LinkStyled>
        <LinkStyled modifiers="underline" to="/">
          Terms & Conditions
        </LinkStyled>
      </FooterStyled>
    </SidebarStyled>
  );
};

export { Sidebar };
