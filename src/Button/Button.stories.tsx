import type {
    Meta,
    Story,
} from '@storybook/react/types-6-0'
import React from 'react'

import 'tippy.js/dist/tippy.css'
import { Button } from '.'

export default {
    component: Button,
    title: 'Button',
} as unknown as Meta

const Template: Story = () => {
    return (
        <Button>
            Hello
        </Button>
    )
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'Button',
}
