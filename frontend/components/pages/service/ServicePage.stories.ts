import type { Meta, StoryObj } from '@storybook/react';
import Content from './index';
import { database } from '@/lib/database';

const meta = {
  title: 'Pages/Service',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  args: {
    ...database.user.services[0]
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};