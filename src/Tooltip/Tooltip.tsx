import Tippy from '@tippyjs/react'
import * as React from 'react'

import type { TooltipProps } from './Tooltip.types'

export const Tooltip: React.FunctionComponent<TooltipProps> = (props) => {
    const {
        children,
        enterDelay = 400,
        exitDelay = 100,
        label,
        ...other
    } = props

    return (
        <Tippy
            content={label}
            delay={[
                enterDelay,
                exitDelay,
            ]}
            {...other}
        >
            {children as React.ReactElement}
        </Tippy>
    )
}
