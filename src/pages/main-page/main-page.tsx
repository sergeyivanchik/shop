import { useGetProductsQuery } from '@/store';

import { ContainerLayout } from '@/layouts';

import { Products } from '@/modules';

import { BigSale } from '@/components';

const MainPage = () => {
  const { data = [], isLoading } = useGetProductsQuery(null);

  return (
    <ContainerLayout topComponent={BigSale}>
      <Products title="Trending" link="/" products={data} loading={isLoading} />
    </ContainerLayout>
  );
};

export { MainPage };
