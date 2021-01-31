import * as React from 'react'

import { Loader } from '../Button'

import { IconButtonRoot } from './IconButton.stypes'
import type { IconButtonProps } from './IconButton.types'

export const IconButton: React.FunctionComponent<IconButtonProps> = (props) => {
    const {
        icon,
        size = 'medium',
        variant = 'primary',
        loading = false,
        ...other
    } = props

    return (
        <IconButtonRoot
            variant={variant}
            {...other}
        >
            {loading
                ? <Loader />
                : (
                    React.cloneElement(
                        icon,
                        { size: size })
                )}
        </IconButtonRoot>
    )
}
