import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta = {
  title: 'Organisms/Service/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: "Variação entre alguns modelos padrões",
      options:["service", "input"]
    }
  },
  args: {
    title: "Title"
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Service: Story = {
  args: { variant: "service" },
};

export const Input: Story = {
  args: { variant: "input" },
};
