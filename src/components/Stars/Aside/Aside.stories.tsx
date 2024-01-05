import type { Meta, StoryObj } from '@storybook/react';
import { PlaneTakeoff } from 'lucide-react';

import Aside from './index';

const meta = {
  title: 'Organism/Aside',
  component: Aside,
  parameters: {
    layout: 'centered',
  },
  tags: ['organisms', 'aside'],
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof Aside>;
type Props = Story['args'];

export const Default = (args:Props) => (
  <div className="w-full h-[300px]">
    <Aside {...args}/>
  </div>
);