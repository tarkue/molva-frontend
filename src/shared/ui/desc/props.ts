type DescType = 0 | 1;

export interface DescProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onDescChange?: (desc: DescType) => void;
  value?: DescType;
}
