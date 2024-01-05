import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './index';
import { argResolver } from '@/assets/utils/stories';

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    src: argResolver('src', 'text', 'https://pbs.twimg.com/profile_images/1369214387872524801/8YQrQ6oX_400x400.jpg'),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;
type Props = Story['args'];

const data: Required<Props> = {
  src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
}

export const Default = (args:Props) => <div className='w-[100px]'><Avatar {...data} {...args}/></div>;