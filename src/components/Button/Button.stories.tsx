import { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ButtonProps>

export const Example: StoryObj<ButtonProps> = {
  args: {
    fullWith: false
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}