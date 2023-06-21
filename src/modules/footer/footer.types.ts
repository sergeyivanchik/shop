interface IFooterProps {
  developer?: string;
}

type TContentPosition = 'left' | 'right';

interface IContainerStyledProps {
  modifiers?: TContentPosition;
}

export { IFooterProps, IContainerStyledProps };
