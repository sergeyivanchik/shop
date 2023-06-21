import { useGetCategoriesQuery, useGetProductsQuery } from '@/store';

import { ContainerLayout } from '@/layouts';

import { Categories, NewYearSale, Products } from '@/modules';

import { BigSale } from '@/components';

const MainPage = () => {
  const { data: products = [], isLoading: productsLoading } =
    useGetProductsQuery(null);
  const { data: categories = [], isLoading: categoriesLoading } =
    useGetCategoriesQuery(null);

  return (
    <ContainerLayout topComponent={BigSale}>
      <Products
        title="Trending"
        link="/"
        products={products?.slice(0, 5)}
        loading={productsLoading}
      />
      <Categories
        categories={categories?.slice(0, 5)}
        loading={categoriesLoading}
        title="Worth seeing"
      />
      <NewYearSale />
    </ContainerLayout>
  );
};

export { MainPage };
