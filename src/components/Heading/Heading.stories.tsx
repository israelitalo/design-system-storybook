import { Meta, StoryObj } from '@storybook/react';

import { Heading, type HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Título h2 padrão',
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
} as Meta<HeadingProps>

export const Example: StoryObj<HeadingProps> = {}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Título h1</h1>
    )
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