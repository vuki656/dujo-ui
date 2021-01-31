/* eslint-disable sort-keys */

import * as React from 'react'
import {
    config,
    useTransition,
} from 'react-spring'

import { Notification } from '../Notification'
import type { NotificationType } from '../Notification/Notification.types'
import type { NotificationVariantType } from '../styles'

import { NotificationProviderRoot } from './NotificationProvider.styles'
import type { NotificationContextType } from './NotificationProvider.types'

export const NotificationContext = React.createContext<NotificationContextType | null>(null)

export const NotificationProvider: React.FunctionComponent = (props) => {
    const { children } = props

    const [
        notifications,
        setNotification,
    ] = React.useState<NotificationType[]>([])

    const renderNotifications = useTransition(notifications, {
        config: config.gentle,
        enter: {
            opacity: 1,
            transform: 'translate3d(0%, 0px, 0px)',
        },
        from: {
            opacity: 0,
            transform: 'translate3d(100%, 0px, 0px)',
        },
        keys: notifications.map((_item, index) => index),
        leave: {
            opacity: 0,
            transform: 'translate3d(100%, 0px, 0px)',
        },
    })

    const value = React.useMemo<NotificationContextType>(() => {
        return {
            display: (message: string, variant: NotificationVariantType) => {
                const id = String(Date.now() + Math.random())

                // Display notification
                setNotification((existingNotifications) => {
                    const isNotificationDisplayed = existingNotifications.some((notification) => {
                        return notification.message === message
                    })

                    if (isNotificationDisplayed) {
                        return existingNotifications
                    }

                    return existingNotifications.concat({
                        id: id,
                        message,
                        variant,
                    })
                })

                // Remove notification
                setTimeout(() => {
                    setNotification((existingNotifications) => {
                        return existingNotifications.filter((notification) => {
                            return notification.id !== id
                        })
                    })
                }, 3000)
            },
        }
    }, [])

    return (
        <NotificationContext.Provider value={value}>
            {children}
            <NotificationProviderRoot>
                {renderNotifications((styles, notification) => {
                    return (
                        <Notification
                            // There is a type mismatch probably due to version being rc3
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            // @ts-expect-error
                            style={styles}
                            variant={notification.variant}
                        >
                            {notification.message}
                        </Notification>
                    )
                })}
            </NotificationProviderRoot>
        </NotificationContext.Provider>
    )
}
