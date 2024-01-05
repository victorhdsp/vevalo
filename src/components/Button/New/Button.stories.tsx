import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Atoms/Button/New',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  tags: ['atoms', 'button'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;
type Props = Story['args'];

export const Default = (args:Props) => <Button {...args}/>;