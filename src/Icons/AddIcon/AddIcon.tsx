import * as React from 'react'

import { IconBase } from '../../IconBase'
import type { IconCommonProps } from '../Icon.types'

export const AddIcon = React.memo<IconCommonProps>((props) => {
    return (
        <IconBase {...props}>
            <path
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55
                    0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1
                    1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
            />
        </IconBase>
    )
})
