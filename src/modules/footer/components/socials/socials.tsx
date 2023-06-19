import { ReactComponent as Instagram } from '@/assets/icons/instagram.svg';
import { ReactComponent as Youtube } from '@/assets/icons/youtube.svg';
import { ReactComponent as Facebook } from '@/assets/icons/facebook.svg';
import { socials } from './socials.constants';

import { ESocials } from './socials.enums';

import { SocialsStyled } from './sociuals.styles';

const Socials = () => {
  return (
    <SocialsStyled>
      <Youtube
        onClick={() => window.open(socials[ESocials.youtube], '_blank')}
      />
      <Instagram
        onClick={() => window.open(socials[ESocials.instagram], '_blank')}
      />
      <Facebook
        onClick={() => window.open(socials[ESocials.facebook], '_blank')}
      />
    </SocialsStyled>
  );
};

export { Socials };
