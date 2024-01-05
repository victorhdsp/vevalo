import type { Meta, StoryObj } from '@storybook/react';

import Layout from './layout';
import Home from './page';

const meta = {
  title: 'Layout/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {},
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof Home>;
type Props = Story['args'];

export const Default = (args:Props) => (
  <Layout>
    <Home {...args}/>
  </Layout>
);