import { Meta, StoryObj } from '@storybook/react';

import ScrollArea from './index';

const meta:Meta = {
  title: 'Atoms/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['atoms', 'ScrollArea'],
}

export default meta;

type Story = StoryObj<typeof ScrollArea>;
type Props = Story['args'];

export const Default = (args:Props) => (
  <div className="w-[200px] h-[300px] overflow-hidden">
    <ScrollArea>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item 4</p>
      <p>Item 5</p>
      <p>Item 6</p>
      <p>Item 7</p>
      <p>Item 8</p>
      <p>Item 9</p>
      <p>Item 10</p>
      <p>Item 11</p>
      <p>Item 12</p>
      <p>Item 13</p>
      <p>Item 14</p>
      <p>Item 15</p>
      <p>Item 16</p>
      <p>Item 17</p>
      <p>Item 18</p>
      <p>Item 19</p>
      <p>Item 20</p>
    </ScrollArea>
  </div>
);