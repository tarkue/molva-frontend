import { VariantProps } from 'class-variance-authority';
import { IconVariants } from './variants';

export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof IconVariants> {
  glyph: glyphs;
}

export type glyphs =
  | 'logo'
  | 'account'
  | 'login'
  | 'add'
  | 'delete'
  | 'arrow'
  | 'sort-desc'
  | 'sord-asc'
  | 'favorite'
  | 'arrow-up'
  | 'arrow-down'
  | 'like'
  | 'dislike'
  | 'trash'
  | 'notification';
