import { useGetProductsQuery } from '@/store';

import { ContainerLayout } from '@/layouts';

import { ProductCard, Products } from '@/modules';

const ProductPage = () => {
  const { data: products = [], isLoading } = useGetProductsQuery(null);

  return (
    <ContainerLayout topComponent={ProductCard}>
      <Products
        products={products.slice(0, 5)}
        title="Related products"
        loading={isLoading}
        link="/"
      />
    </ContainerLayout>
  );
};

export { ProductPage };
