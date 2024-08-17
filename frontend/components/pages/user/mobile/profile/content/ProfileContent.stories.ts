import type { Meta, StoryObj } from '@storybook/react';
import Content from './index';

const meta = {
  title: 'Pages/User/Mobile/Profile/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};