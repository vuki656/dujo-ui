/* eslint-disable sort-keys */

import type { Spacing } from './spacing.types'

const spacingBase = '1em'

export const spacing: Spacing = {
    def: '1em',
    lg: `calc(2.00 * ${spacingBase})`,
    md: `calc(1.25 * ${spacingBase})`,
    sm: `calc(0.75 * ${spacingBase})`,
    xl: `calc(3.25 * ${spacingBase})`,
    xs: `calc(0.50 * ${spacingBase})`,
    xxl: `calc(5.25 * ${spacingBase})`,
    xxs: `calc(0.25 * ${spacingBase})`,
}
