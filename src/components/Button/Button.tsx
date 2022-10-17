import { clsx } from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
  fullWith?: boolean
}

export const Button: React.FC<ButtonProps> = ({ size = 'md', children, asChild, fullWith = true }) => {
  const Component = asChild ? Slot : 'button';
  return (
    <Component
      className={clsx(
        "text-black bg-cyan-500 rounded font-semibold hover:bg-cyan-300 transition-all focus:ring-2 ring-cyan-300",
        {
          'text-xs py-2 px-2': size === 'sm',
          'text-sm py-3 px-2': size === 'md',
          'text-md py-4 px-3': size === 'lg',
          'w-full': fullWith
        }
      )}
    >
      {children}
    </Component>
  );
};