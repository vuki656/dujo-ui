import type React from 'react'
import styled from 'styled-components'

import { getButtonStyles } from '../Button'

import type { IconButtonProps } from './IconButton.types'

type IconButtonRootProps =
    React.ButtonHTMLAttributes<HTMLButtonElement>
    & Pick<IconButtonProps, 'variant'>

export const IconButtonRoot = styled('button')<IconButtonRootProps>((props) => {
    let styles = {
        '&:focus': { outline: 'none' },
        ...getButtonStyles(props.theme, props),
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
    }

    if (props.variant === 'outlined') {
        styles = {
            ...styles,
            padding: props.theme.spacing.xxs,
        }
    }

    return styles
})
