import { useGetCategoriesQuery, useGetProductsQuery } from '@/store';

import { ContainerLayout } from '@/layouts';

import { Categories, Products } from '@/modules';

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
        products={products}
        loading={productsLoading}
      />
      <Categories
        categories={categories}
        loading={categoriesLoading}
        title="Worth seeing"
      />
    </ContainerLayout>
  );
};

export { MainPage };
