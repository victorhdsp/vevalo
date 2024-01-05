import { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta:Meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['atoms', 'card'],
}

export default meta;

type Story = StoryObj<typeof Card>;
type Props = Story['args'];

export const Default = (args:Props) => <Card>Teste</Card>;