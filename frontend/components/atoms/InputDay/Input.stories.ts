import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/InputDay',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      type: 'number',
      control: {
        min: 0,
        max: 6
      }
    }
  },
  args: {
    label: 0,
    value: 0,
    onChange: fn()
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};