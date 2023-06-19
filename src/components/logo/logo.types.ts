interface ILogoProps {
  to?: string;
  name?: string;
  className?: string;
  width?: number;
}

interface ILogoStyledProps {
  $width: ILogoProps['width'];
}

export { ILogoProps, ILogoStyledProps };
