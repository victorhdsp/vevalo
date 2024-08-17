import type { Meta, StoryObj } from '@storybook/react';
import Trigger from './index';

const meta = {
  title: 'Pages/User/Mobile/Profile/Trigger',
  component: Trigger,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Trigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};