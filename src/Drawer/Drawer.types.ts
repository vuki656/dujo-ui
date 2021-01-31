import type React from 'react'

import type { DrawerVariantType } from '../styles'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: DrawerVariantType
}
