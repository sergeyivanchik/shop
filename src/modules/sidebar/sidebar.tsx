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
  const {
    data: categories,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery(null);

  const hasLoading = isLoading && <Loading />;
  const hasCategories =
    isSuccess &&
    categories?.map(({ id, name }) => (
      <LinkStyled to={`/categories/${id}`} key={id}>
        {name}
      </LinkStyled>
    ));

  return (
    <SidebarStyled>
      <TitleStyled>CATEGORIES</TitleStyled>
      <ContainerStyled>
        {hasLoading}
        {hasCategories}
      </ContainerStyled>
      <FooterStyled>
        <LinkStyled modifiers="underline" to="/">
          Help
        </LinkStyled>
        <LinkStyled modifiers={['underline', 'active']} to="/">
          Terms & Conditions
        </LinkStyled>
      </FooterStyled>
    </SidebarStyled>
  );
};

export { Sidebar };
