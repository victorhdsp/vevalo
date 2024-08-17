import type { Meta, StoryObj } from '@storybook/react';
import Content from './index';
import { database } from '@/lib/database';

const meta = {
  title: 'Pages/User/Mobile/Services/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: database.user.services
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};