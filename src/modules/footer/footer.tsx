import { FC } from 'react';

import { Logo } from '@/components';

import { IFooterProps } from './footer.types';

import { Socials } from './components';

import {
  FooterStyled,
  ContentStyled,
  DeveloperContainerStyled,
  DeveloperStyled,
  ContainerStyled,
} from './footer.styles';

const Footer: FC<IFooterProps> = ({ developer = 'Sergey' }) => {
  return (
    <FooterStyled>
      <ContentStyled>
        <ContainerStyled modifiers="left">
          <Logo />
        </ContainerStyled>
        <ContainerStyled>
          <DeveloperContainerStyled>
            Developed by <DeveloperStyled>{developer}</DeveloperStyled>
          </DeveloperContainerStyled>
        </ContainerStyled>
        <ContainerStyled modifiers="right">
          <Socials />
        </ContainerStyled>
      </ContentStyled>
    </FooterStyled>
  );
};

export { Footer };
