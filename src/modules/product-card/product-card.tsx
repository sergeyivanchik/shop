import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '@/store';

import { Loading } from '@/components';
import { Preview } from './components';

import { ProductCardStyled } from './product-card.styles';

const ProductCard: FC = () => {
  const { productId = '' } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);

  const hasLoading = isLoading && <Loading />;
  const hasProduct = !isLoading && !!product && (
    <>
      <Preview images={product?.images || []} />
    </>
  );

  return (
    <ProductCardStyled>
      {hasLoading}
      {hasProduct}
    </ProductCardStyled>
  );
};

export { ProductCard };
