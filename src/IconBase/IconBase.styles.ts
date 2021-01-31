import type React from 'react'
import type { CSSObject } from 'styled-components'
import styled from 'styled-components'

import type { IconCommonProps } from '../Icons/Icon.types'
import type { IconSizeType } from '../styles'

type SvgRootProps =
    React.SVGAttributes<SVGElement>
    & Pick<IconCommonProps, 'size'>

const getSize = (size?: IconSizeType) => {
    switch (size) {
        case 'small':
            return {
                height: '18px',
                width: '18px',
            }
        case 'medium':
            return {
                height: '24px',
                width: '24px',
            }
        case 'big':
            return {
                height: '32px',
                width: '32px',
            }
        default:
            return {
                height: '14px',
                width: '14px',
            }
    }
}

export const SvgRoot = styled('svg')<SvgRootProps>((props) => {
    const styles: CSSObject = { ...getSize(props.size) }

    return styles
})
