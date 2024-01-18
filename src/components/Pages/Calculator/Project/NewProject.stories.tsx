import type { Meta, StoryObj } from '@storybook/react';

import NewProject from './index';

const meta = {
  title: 'Organism/New Project',
  component: NewProject,
  parameters: {
    layout: 'centered',
  },
  tags: ['organisms', 'New Project'],
} satisfies Meta<typeof NewProject>;

export default meta;
type Story = StoryObj<typeof NewProject>;
type Props = Story['args'];

export const Default = (args:Props) => (
  <div className="w-[500px] h-[800px]">
    <NewProject {...args}/>
  </div>
);