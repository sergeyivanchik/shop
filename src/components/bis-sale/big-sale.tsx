import computer from '@/assets/images/computer.png';

import {
  BigSaleStyled,
  TitleStyled,
  SubTitleStyled,
  NameStyled,
  ImageStyled,
  ButtonStyled,
} from './big-sale.styles';

const BigSale = () => {
  const handleClick = () => {
    console.log('Ok');
  };

  return (
    <BigSaleStyled>
      <TitleStyled>BIG SALE 20%</TitleStyled>
      <SubTitleStyled>the bestseller of 2022</SubTitleStyled>
      <NameStyled>LENNON r2d2</NameStyled>
      <NameStyled>with NVIDIA 5090 TI</NameStyled>
      <ImageStyled src={computer} alt="computer" />
      <ButtonStyled title="Shop Now" onclick={handleClick} />
    </BigSaleStyled>
  );
};

export { BigSale };
