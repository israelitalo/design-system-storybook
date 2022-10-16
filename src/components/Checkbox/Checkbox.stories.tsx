import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';

import { Checkbox, type CheckboxProps } from "./Checkbox";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    size: 'md',
    text: 'Confirmo os dados',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  // decorators: [
  //   (Story) => {
  //     return (
  //       <div className='flex items-center gap-2'>
  //         {Story()}
  //         <Text size='sm'>Confirmo os dados</Text>
  //       </div>
  //     )
  //   }
  // ]
} as Meta<CheckboxProps>

export const Example: StoryObj<CheckboxProps> = {}