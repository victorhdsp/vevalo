import type { Meta, StoryObj } from '@storybook/react';

import New from './index';
import FormBudget from '@/components/Form/Budget';1

const meta = {
  title: 'Molecules/Item/New',
  component: New,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    title: {
      name: 'title',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: 'Novo item',  
        },
      },
    },
  },
} satisfies Meta<typeof New>;

export default meta;
type Story = StoryObj<typeof New>;
type Props = Story['args'];

export const Budget = (args:Props) => (
  <div className='w-[150px] h-[200px]'>
    <New title='Orçamento'>
      <div className="w-[400px] h-[500px]">
        <FormBudget />
      </div>
    </New>
  </div>
);