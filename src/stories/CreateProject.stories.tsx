import CreateProject from '@components/CreateProject'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Project/Create',
  component: CreateProject,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CreateProject>

const Template: ComponentStory<typeof CreateProject> = (args) => <CreateProject {...args} onClose={action('onClose')} onError={action('onError')} />

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
