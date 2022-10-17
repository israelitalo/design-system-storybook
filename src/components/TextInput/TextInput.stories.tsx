import { Envelope } from 'phosphor-react';

import { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/Input',
  component: TextInput,
  args: {
    inputSize: 'md',
    placeholder: 'inserir dados aqui...',
  },
  argTypes: {
    inputSize: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextInputProps>

export const ExampleWithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: <Envelope />,
    fullWith: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  }
}

export const ExampleWithoutIcon: StoryObj<TextInputProps> = {
  args: {
    fullWith: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  }
}