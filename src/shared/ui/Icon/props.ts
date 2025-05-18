import { VariantProps } from 'class-variance-authority';
import { IconVariants } from './variants';

export interface IconProps
  extends VariantProps<typeof IconVariants>,
    React.HTMLAttributes<HTMLElement> {
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
  | 'check'
  | 'close'
  | 'dislike'
  | 'edit'
  | 'heart'
  | 'like'
  | 'login'
  | 'logo'
  | 'notification'
  | 'publish'
  | 'report'
  | 'review'
  | 'sort-asc'
  | 'sort-desc'
  | 'star'
  | 'telegram'
  | 'theme'
  | 'trash'
  | 'vk'
  | 'whatsapp';
