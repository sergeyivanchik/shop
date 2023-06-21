type TLinkActive = 'active';
type TLinkUnderline = 'underline';

type TLinkMode = TLinkActive | TLinkUnderline | undefined;

interface ILinkStyledProps {
  modifiers?: TLinkMode | TLinkMode[];
}

interface ISidebarContainerStyledProps {
  $maxHeight: number;
}

interface ISidebarProps {
  maxHeight: number;
}

export { ILinkStyledProps, ISidebarContainerStyledProps, ISidebarProps };
