import type React from 'react'

import type { NotificationVariantType } from '../styles'

export type NotificationProps = React.HTMLAttributes<HTMLDivElement> & {
    variant: NotificationVariantType
}

export type NotificationType = {
    id: string
    variant: NotificationVariantType
    message: string
}
