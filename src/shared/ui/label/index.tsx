'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';
import { labelVariants } from './variants';

const Label = forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ padding, className, ...props }, ref) => (
  <div className={cn(labelVariants({ padding, className }))}>
    <LabelPrimitive.Root ref={ref} {...props} />
  </div>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
