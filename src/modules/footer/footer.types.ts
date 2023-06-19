interface IFooterProps {
  developer?: string;
}

type TContentPosition = 'left' | 'right';

interface IContainerStyled {
  modifiers?: TContentPosition;
}

export { IFooterProps, IContainerStyled };
