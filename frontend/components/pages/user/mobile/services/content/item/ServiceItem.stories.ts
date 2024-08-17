import type { Meta, StoryObj } from '@storybook/react';
import Item from './index';

const meta = {
  title: 'Pages/User/Mobile/Services/Content/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: "Title"
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};