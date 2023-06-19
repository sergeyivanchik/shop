type TLinkActive = 'active';
type TLinkUnderline = 'underline';

type TLinkMode = TLinkActive | TLinkUnderline | undefined;

interface ILinkStyledProps {
  modifiers?: TLinkMode | TLinkMode[];
}

export { ILinkStyledProps };