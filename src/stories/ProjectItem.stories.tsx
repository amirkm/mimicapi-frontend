import ProjectItem from '@components/ProjectItem'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { v4 as uuidv4 } from 'uuid'

function generateRandomString(length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default {
  title: 'Components/ProjectItem',
  component: ProjectItem,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof ProjectItem>

const Template: ComponentStory<typeof ProjectItem> = (args) => (
  <ProjectItem
    {...args}
    onEditClick={action('onEditClick')}
    onMembersClick={action('onMembersClick')}
    onTokenClick={action('onTokenClick')}
    projectId={uuidv4()}
  />
)

export const Default = Template.bind({})
Default.args = { title: 'Title' }

export const HasAllValue = Template.bind({})
HasAllValue.args = { title: 'Project Title', hasMembers: true, isEnabled: true, hasToken: true }

export const LongTitle = Template.bind({})
LongTitle.args = { title: generateRandomString(1000) }
