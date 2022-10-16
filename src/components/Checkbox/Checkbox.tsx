import clsx from 'clsx';
import { Check } from 'phosphor-react';
import React from 'react';

import * as CheckboxRadix from '@radix-ui/react-checkbox';

import { Text } from '../Text/Text';

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ size = 'md', text }) => {
  return (
    <div className={clsx({ 'flex gap-2 items-center': Boolean(text)})}>
      <CheckboxRadix.Root
        id={text?.trim() || ''}
        className={clsx(
          "rounded bg-gray-800 transition-all focus:ring-2 ring-cyan-300",
          {
            'w-4 h-4 p-[2px]': size === 'sm',
            'w-6 h-6 p-[2px]': size === 'md',
            'w-8 h-8 p-[2px]': size === 'lg',
          }
        )}
      >
        <CheckboxRadix.Indicator asChild>
          <Check weight='bold'
            className={clsx(
              'h-5 w-5 text-cyan-500',
              {
                'w-3 h-3': size === 'sm',
                'h-5 w-5': size === 'md',
                'w-7 h-7': size === 'lg',
              }
            )}
          />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {text && (
        <Text size='sm'>
          <label className='hover:cursor-pointer' htmlFor={text?.trim()}>{text}</label>
        </Text>
      )}
    </div>
  );
};