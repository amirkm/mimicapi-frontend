import UpdateProject from '@components/UpdateProject'
import IProject from '@models/project'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const dummyProject = { _id: 'ahhaoibbaiksug874836g68sd', title: 'MyProject', isEnabled: true } as IProject

export default {
  title: 'Components/Project/Update',
  component: UpdateProject,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof UpdateProject>

const Template: ComponentStory<typeof UpdateProject> = (args) => (
  <UpdateProject
    {...args}
    project={dummyProject}
    onClose={action('onClose')}
    onUpdate={action('onUpdate')}
    onDelete={action('onDelete')}
    onError={action('onError')}
  />
)

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
