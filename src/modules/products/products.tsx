import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProductsProps } from './products.types';

import { Loading, Product } from '@/components';

import {
  ProductsStyled,
  TitleStyled,
  ContainerStyled,
  ButtonStyled,
} from './products.styles';

const Products: FC<IProductsProps> = ({ title, link, products, loading }) => {
  const navigate = useNavigate();

  const hasLoading = loading && <Loading />;
  const hasProducts = !loading && !!products.length && (
    <>
      <ContainerStyled>
        {products.map((p) => (
          <Product
            category={p.category.name}
            image={p.images[0]}
            purchased={Math.floor(Math.random() * 100)}
            id={p.id}
            title={p.title}
            price={p.price}
            key={p.id}
          />
        ))}
      </ContainerStyled>
      <ButtonStyled title="See more" onclick={() => navigate(link)} />
    </>
  );

  return (
    <ProductsStyled>
      <TitleStyled>{title}</TitleStyled>
      {hasLoading}
      {hasProducts}
    </ProductsStyled>
  );
};

export { Products };
