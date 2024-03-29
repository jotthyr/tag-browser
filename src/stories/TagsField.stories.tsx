import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../main';
import TagsField from '../components/TagsField';

const meta: Meta<typeof TagsField> = {
  title: "TagsField",
  component: TagsField,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta<typeof TagsField>

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    
  }
}