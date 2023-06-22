import { FC } from 'react';

import { ContainerLayout } from '@/layouts';

import { ProductCard } from '@/modules';

const ProductPage: FC = () => {
  return <ContainerLayout topComponent={ProductCard}></ContainerLayout>;
};

export { ProductPage };
