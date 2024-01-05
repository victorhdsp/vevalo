import type { Meta, StoryObj } from '@storybook/react';

import History from './index';

const meta = {
  title: 'Organism/History',
  component: History,
  parameters: {
    layout: 'centered',
  },
  tags: ['organisms', 'History'],
} satisfies Meta<typeof History>;

export default meta;
type Story = StoryObj<typeof History>;
type Props = Story['args'];

export const Default = (args:Props) => <History {...args}/>;