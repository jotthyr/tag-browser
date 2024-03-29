import type { Meta, StoryObj } from '@storybook/react';

import ConfigurationBar from "../components/ConfigurationBar"
import { Provider } from 'react-redux';
import { store } from '../main';

const meta: Meta<typeof ConfigurationBar> = {
  title: "ConfigurationBar",
  component: ConfigurationBar,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta<typeof ConfigurationBar>

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    color: "#000",
    inputBackground: "#FFF",
    radioColor: "#000",
    size: "medium"
  }
}