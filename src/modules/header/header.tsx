import { Logo } from '@/components/logo/logo';

import { ContentStyled, HeaderStyled } from './header.styles';

const Header = () => {
  return (
    <HeaderStyled>
      <ContentStyled>
        <Logo />
      </ContentStyled>
    </HeaderStyled>
  );
};

export { Header };
