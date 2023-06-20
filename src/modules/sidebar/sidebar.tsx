import { useRef } from 'react';
import { useSize } from 'ahooks';
import { useParams } from 'react-router-dom';

import { useGetCategoriesQuery } from '@/store';

import { Loading } from '@/components';

import {
  SidebarStyled,
  TitleStyled,
  ContainerStyled,
  LinkStyled,
  FooterStyled,
} from './sidebar.styles';

const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  let { id = -1 } = useParams();

  const maxHeight = (size?.height || 0) - 50 - 8;

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
        modifiers={+id === cat.id ? 'active' : undefined}
      >
        {cat.name}
      </LinkStyled>
    ));

  return (
    <SidebarStyled ref={ref}>
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
