import type React from 'react'

import type { SpacingType } from '../styles'

export type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
    spacing?: SpacingType
}
