interface IButtonProps {
  title: string;
  onclick: () => void;
  className?: string;
  disabled?: boolean;
}

interface IButtonStyledProps {
  modifiers?: 'disabled';
}

export { IButtonProps, IButtonStyledProps };
