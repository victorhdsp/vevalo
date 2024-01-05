import type { Meta, StoryObj } from '@storybook/react';

import Budget from './index';

const meta = {
  title: 'Molecules/Form/Budget',
  component: Budget,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    onSubmit: {
      action: 'submit',
    },
  },
} satisfies Meta<typeof Budget>;

export default meta;
type Story = StoryObj<typeof Budget>;
type Props = Story['args'];

const data: Required<Props> = {
}

export const Default = (args:Props) => <Budget {...data} {...args}/>;