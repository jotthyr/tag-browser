import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../main';
import LoadMessage from '../components/loadStateComponents/LoadMessage';

const meta: Meta<typeof LoadMessage> = {
  title: "LoadMessage",
  component: LoadMessage,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta<typeof LoadMessage>

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    color: "blue",
    fontColor: "black",
    size: 40,
    thickness: 3.6,
  }
}