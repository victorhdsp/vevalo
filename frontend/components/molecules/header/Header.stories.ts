import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';
import { User, Box } from 'lucide-react';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { 
    title: "title",
    description: "description",
    Icon: Box
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};