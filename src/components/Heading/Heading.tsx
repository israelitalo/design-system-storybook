import { clsx } from 'clsx';
import React from 'react';

import { Slot } from '@radix-ui/react-slot';

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export const Heading: React.FC<HeadingProps> = ({ size = 'md', children, asChild }) => {
  const Component = asChild ? Slot : 'h2';
  return (
    <Component
      className={clsx(
        "text-gray-100 font-bold",
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {children}
    </Component>
  );
};