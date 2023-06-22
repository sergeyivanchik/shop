import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '@/store';

import { Button, Loading } from '@/components';
import { Preview } from './components';

import {
  ProductCardStyled,
  InfoStyled,
  TitleStyled,
  PriceStyled,
  DescriptionStyled,
  WrapperStyled,
  FooterStyled,
  ButtonsContainerStyled,
  PurchasedStyled,
} from './product-card.styles';

const ProductCard = () => {
  const { productId = '' } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);

  const hasLoading = isLoading && <Loading />;
  const hasProduct = !isLoading && !!product && (
    <>
      <Preview images={product?.images || []} />
      <InfoStyled>
        <WrapperStyled>
          <TitleStyled>{product.title}</TitleStyled>
          <PriceStyled>{product.price}$</PriceStyled>
          <DescriptionStyled>{product.description}</DescriptionStyled>
          <ButtonsContainerStyled>
            <Button
              title="Add to cart"
              onclick={() => console.log('Add to cart')}
            />
            <Button
              title="Add to favorites"
              onclick={() => console.log('Add to favorites')}
            />
          </ButtonsContainerStyled>
        </WrapperStyled>
        <FooterStyled>
          <PurchasedStyled>
            {Math.floor(Math.random() * 100)} people purchased
          </PurchasedStyled>
        </FooterStyled>
      </InfoStyled>
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
