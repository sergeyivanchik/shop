import { FC } from 'react';

import logo from '@/assets/icons/logo.svg';

import { ILogoProps } from './logo.types';

import { LogoStyled, ImgStyled } from './logo.styles';

const Logo: FC<ILogoProps> = ({
  className,
  to = '/',
  name = 'Stuff',
  width = 78,
}) => {
  return (
    <LogoStyled $width={width} to={to} className={className}>
      <ImgStyled src={logo} alt={name} title={name} />
    </LogoStyled>
  );
};

export { Logo };
