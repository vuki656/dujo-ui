import * as React from 'react'

import {
    NotificationErrorIcon,
    NotificationInfoIcon,
    NotificationMessage,
    NotificationRoot,
    NotificationSuccessIcon,
    NotificationWarningIcon,
} from './Notification.styles'
import type { NotificationProps } from './Notification.types'

export const Notification: React.FunctionComponent<NotificationProps> = (props) => {
    const {
        children,
        style,
        variant,
        ...other
    } = props

    return (
        <NotificationRoot
            style={style}
            variant={variant}
            {...other}
        >
            {(() => {
                switch (props.variant) {
                    case 'error':
                        return <NotificationErrorIcon size="small" />
                    case 'info':
                        return <NotificationInfoIcon size="small" />
                    case 'success':
                        return <NotificationSuccessIcon size="small" />
                    case 'warning':
                        return <NotificationWarningIcon size="small" />
                }
            })()}
            <NotificationMessage>
                {children}
            </NotificationMessage>
        </NotificationRoot>
    )
}
