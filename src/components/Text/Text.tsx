import { clsx } from 'clsx';
import React from 'react';

import { Slot } from '@radix-ui/react-slot';

export type TextProps = {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export const Text: React.FC<TextProps> = ({ size = 'md', children, asChild }) => {
  const Component = asChild ? Slot : 'span';
  return (
    <Component
      className={clsx(
        "text-gray-100",
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        }
      )}
    >
      {children}
    </Component>
  );
};