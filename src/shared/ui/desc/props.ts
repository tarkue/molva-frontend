export interface DescProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onDescChange?: (desc: boolean) => void;
}
