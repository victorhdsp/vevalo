import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta = {
  title: 'Organisms/User/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: "Variação entre alguns modelos padrões",
      options:["profile", "services", "service", "input"]
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  args: { variant: "profile" },
};

export const Services: Story = {
  args: { variant: "services" },
};

export const Service: Story = {
  args: { variant: "service" },
};

export const Input: Story = {
  args: { variant: "input" },
};
