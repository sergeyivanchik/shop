import { FC } from 'react';

import santa from '@/assets/images/santa.png';
import shoe from '@/assets/images/shoe.png';
import nintendo from '@/assets/images/nintendo.png';

import {
  NewYearSaleStyled,
  RightStyled,
  LeftStyled,
  PercentageStyled,
  TitleStyled,
  SubTitleStyled,
  ButtonStyled,
  ShoeStyled,
  NintendoStyled,
} from './new-year-sale.styles';

const NewYearSale: FC = () => {
  return (
    <NewYearSaleStyled>
      <LeftStyled>
        <TitleStyled>NEW YEAR</TitleStyled>
        <SubTitleStyled>SALE</SubTitleStyled>
        <ButtonStyled title="See more" onclick={() => console.log('OK')} />
        <ShoeStyled src={shoe} alt="shoe" />
        <NintendoStyled src={nintendo} alt="nintendo" />
      </LeftStyled>
      <RightStyled url={santa}>
        save up to <PercentageStyled>&nbsp;50%&nbsp;</PercentageStyled> off
      </RightStyled>
    </NewYearSaleStyled>
  );
};

export { NewYearSale };
