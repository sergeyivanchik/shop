import { FC, Fragment } from 'react';
import { configResponsive, useResponsive } from 'ahooks';

import { Logo } from '@/components';

import { IFooterProps } from './footer.types';

import { Socials } from './components';

import {
  FooterStyled,
  ContentStyled,
  DeveloperContainerStyled,
  DeveloperStyled,
  ContainerStyled,
  WrapperStyled,
} from './footer.styles';

configResponsive({
  large: 451,
});

const Footer: FC<IFooterProps> = ({ developer = 'Sergey' }) => {
  const { large } = useResponsive();

  const hasRightMode = large ? 'right' : undefined;

  const Wrapper = !large ? WrapperStyled : Fragment;

  return (
    <FooterStyled>
      <ContentStyled>
        <ContainerStyled modifiers="left">
          <Logo />
        </ContainerStyled>
        <Wrapper>
          <ContainerStyled>
            <DeveloperContainerStyled>
              Developed by <DeveloperStyled>{developer}</DeveloperStyled>
            </DeveloperContainerStyled>
          </ContainerStyled>
          <ContainerStyled modifiers={hasRightMode}>
            <Socials />
          </ContainerStyled>
        </Wrapper>
      </ContentStyled>
    </FooterStyled>
  );
};

export { Footer };
