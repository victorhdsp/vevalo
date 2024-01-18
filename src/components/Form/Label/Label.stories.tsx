import type { Meta, StoryObj } from '@storybook/react';

import Label from './index';
import { argResolver } from '@/assets/utils/stories';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    label: argResolver('label', 'text', 'Nome'),
    help: argResolver('help', 'text', 'Digite seu Nome completo'),
    name: argResolver('htmlFor', 'text', 'name'),
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;
type Props = Story['args'];

const data: Required<Props> = {
  label: 'Nome',
  help: 'Digite seu Nome completo',
  name: 'name',
  required: true,
  children: false,
  visible: true
}

export const Default = (args:Props) => <Label {...data} {...args}/>;