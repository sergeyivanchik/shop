import { Logo } from '@/components';

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
