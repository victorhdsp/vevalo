import type { Meta, StoryObj } from '@storybook/react';
import { PlaneTakeoff } from 'lucide-react';

import Button from './index';

const meta = {
  title: 'Atoms/Button/Default',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      name: 'variant',
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      name: 'size',
      options: ['small', 'medium'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    label: {
      name: 'label',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: 'Button',
        },
      },
    },
    icon: {
      name: 'icon',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
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

export const Secondary = (args:Props) => <Button {...args} variant='secondary'/>;

export const Small = (args:Props) => <Button {...args} size='small'/>;

export const WithIcon = (args:Props) => <Button {...args} icon={PlaneTakeoff} />;

export const WithChild = (args:Props) => <Button {...args}>Children</Button>

export const WithLabel = (args:Props) => <Button {...args} label='Label'/>;