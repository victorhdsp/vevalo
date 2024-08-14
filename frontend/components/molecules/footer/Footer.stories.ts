import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Footer from './index';

const meta = {
  title: 'Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn()
  },
};
