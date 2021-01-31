import type {
    Meta,
    Story,
} from '@storybook/react/types-6-0'
import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import type { HeaderProps } from './Header'
import { Header } from './Header'

export default {
    component: Header,
    title: 'Example/Header',
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
