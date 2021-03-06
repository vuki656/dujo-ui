import type React from 'react'
import { animated } from 'react-spring'
import type { CSSObject } from 'styled-components'
import styled from 'styled-components'

import {
    CheckIcon,
    InfoIcon,
    WarningIcon,
} from '../Icons'

import type { NotificationProps } from './Notification.types'

type NotificationRootProps =
    React.HTMLAttributes<HTMLDivElement>
    & Pick<NotificationProps, 'variant'>

export const NotificationRoot = styled(animated.div as unknown as 'div')<NotificationRootProps>((props) => {
    let styles: CSSObject = {
        alignItems: 'center',
        borderRadius: '5px 0px 0px 5px',
        color: props.theme.palette.white,
        display: 'flex',
        margin: props.theme.spacing.def,
        marginRight: 0,
        padding: `${props.theme.spacing.xs} ${props.theme.spacing.md}`,
    }

    if (props.variant === 'error') {
        styles = {
            ...styles,
            backgroundColor: props.theme.palette.red.main,
        }
    } else if (props.variant === 'info') {
        styles = {
            ...styles,
            backgroundColor: props.theme.palette.blue.main,
        }
    } else if (props.variant === 'success') {
        styles = {
            ...styles,
            backgroundColor: props.theme.palette.green.main,
        }
    } else if (props.variant === 'warning') {
        styles = {
            ...styles,
            backgroundColor: props.theme.palette.yellow.main,
        }
    }

    return styles
})

export const NotificationErrorIcon = styled(WarningIcon)((props) => ({ fill: props.theme.palette.white }))

export const NotificationWarningIcon = styled(WarningIcon)((props) => ({ fill: props.theme.palette.white }))

export const NotificationInfoIcon = styled(InfoIcon)((props) => ({ fill: props.theme.palette.white }))

export const NotificationSuccessIcon = styled(CheckIcon)((props) => ({ fill: props.theme.palette.white }))

export const NotificationMessage = styled('p')((props) => ({
    fontSize: '15px',
    margin: `0 ${props.theme.spacing.def}`,
    maxWidth: '500px',
    minWidth: '300px',
}))
