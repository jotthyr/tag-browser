import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../main';
import PaginationBar from '../components/PaginationBar';

const meta: Meta<typeof PaginationBar> = {
  title: "PaginationBar",
  component: PaginationBar,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta<typeof PaginationBar>

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: "medium",
    shape: "circular"
  }
}