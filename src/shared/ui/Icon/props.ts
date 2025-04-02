import { VariantProps } from 'class-variance-authority';
import { IconVariants } from './variants';

export interface IconProps extends VariantProps<typeof IconVariants> {
  className?: string;
  glyph: glyphs;
}

export type glyphs =
  | 'account'
  | 'add'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'block'
  | 'close'
  | 'dislike'
  | 'edit'
  | 'heart'
  | 'like'
  | 'login'
  | 'logo'
  | 'notification'
  | 'report'
  | 'review'
  | 'sord-asc'
  | 'sort-desc'
  | 'star'
  | 'trash';
