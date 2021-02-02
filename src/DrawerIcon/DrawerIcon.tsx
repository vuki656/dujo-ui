import * as React from 'react'

import { Tooltip } from '../Tooltip'

import { DrawerIconRoot } from './DrawerIcon.styles'
import type { DrawerIconProps } from './DrawerIcon.types'

export const DrawerIcon = React.forwardRef<HTMLDivElement, DrawerIconProps>((props, ref) => {
    const {
        icon,
        onClick,
        selected = false,
        tooltipText,
        ...other
    } = props

    const core = (
        <DrawerIconRoot
            onClick={onClick}
            ref={ref}
            selected={selected}
            {...other}
        >
            {icon}
        </DrawerIconRoot>
    )

    if (tooltipText) {
        return (
            <Tooltip label={tooltipText}>
                {core}
            </Tooltip>
        )
    }

    return (
        <>
            {core}
        </>
    )
})
