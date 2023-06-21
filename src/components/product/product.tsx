import { FC } from 'react';

import { IProductProps } from './product.types';

import {
  ProductStyled,
  ImageStyled,
  WrapperStyled,
  TitleStyled,
  SubTitleStyled,
  BottomStyled,
  PriceContainerStyled,
  PriceStyled,
  OldPriceStyled,
  PurchasedStyled,
} from './product.styles';

const Product: FC<IProductProps> = ({
  id,
  purchased,
  image,
  oldPrice,
  price,
  title,
  category,
}) => {
  const hasOldPrice = !!oldPrice && (
    <OldPriceStyled>{oldPrice}$</OldPriceStyled>
  );

  return (
    <ProductStyled to={`/products/${id}`}>
      <ImageStyled url={image} />
      <WrapperStyled>
        <div>
          <TitleStyled>{title}</TitleStyled>
          <SubTitleStyled>{category}</SubTitleStyled>
        </div>
        <BottomStyled>
          <PriceContainerStyled>
            <PriceStyled>{price}$</PriceStyled>
            {hasOldPrice}
          </PriceContainerStyled>
          <PurchasedStyled> {purchased} people purchased</PurchasedStyled>
        </BottomStyled>
      </WrapperStyled>
    </ProductStyled>
  );
};

export { Product };
