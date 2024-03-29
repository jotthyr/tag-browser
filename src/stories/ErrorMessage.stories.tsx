import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../main';
import ErrorMessage from '../components/loadStateComponents/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: "ErrorMessage",
  component: ErrorMessage,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta<typeof ErrorMessage>

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  }
}