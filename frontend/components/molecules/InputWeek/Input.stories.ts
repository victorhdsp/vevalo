import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/InputWeek',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: "Label"
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};