import { clsx } from 'clsx';
import React, { InputHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

interface TextInputIconProps {
  children: ReactNode | JSX.Element
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg'
  fullWith?: boolean
  icon?: ReactNode | JSX.Element
}

interface TextInputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg'
  fullWith?: boolean
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ inputSize = 'md', fullWith = true, ...rest }) => {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400',
      ) }
      {...rest}
      />
  );
};

export const TextInput = (props: TextInputProps) => {
  const { inputSize, icon } = props;
  return (
    <div
      className={clsx(
        'flex items-center gap-3 rounded bg-gray-800 transition-all focus-within:ring-2 ring-cyan-300',
        {
          'text-xs py-1.5 px-3': inputSize === 'sm',
          'text-sm py-3 px-3': inputSize === 'md',
          'text-md py-4 px-3': inputSize === 'lg',
        }
      )}
    >
      {icon && <TextInputIcon>{icon}</TextInputIcon>}
      <TextInputComponent {...props} />
    </div>
  )
};