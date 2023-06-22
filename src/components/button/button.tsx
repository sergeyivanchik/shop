import { FC } from 'react';

import { IButtonProps } from './button.types';

import { ButtonStyled } from './button.styles';

const Button: FC<IButtonProps> = ({ onclick, title, className, disabled }) => {
  const hasDisabledMode = disabled ? 'disabled' : undefined;

  return (
    <ButtonStyled
      className={className}
      onClick={onclick}
      modifiers={hasDisabledMode}
    >
      {title}
    </ButtonStyled>
  );
};

export { Button };
