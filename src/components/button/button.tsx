import { FC } from 'react';

import { IButtonProps } from './button.types';

import { ButtonStyled } from './button.styles';

const Button: FC<IButtonProps> = ({ onclick, title, className }) => {
  return (
    <ButtonStyled className={className} onClick={onclick}>
      {title}
    </ButtonStyled>
  );
};

export { Button };
