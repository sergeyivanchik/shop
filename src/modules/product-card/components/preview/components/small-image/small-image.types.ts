interface ISmallImageProps {
  image: string;
  onClick: () => void;
  active: boolean;
}

interface ISmallImageStyledProps {
  url: string;
  modifiers?: 'active';
}

export { ISmallImageProps, ISmallImageStyledProps };
