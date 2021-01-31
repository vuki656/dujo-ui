import type React from 'react'

import type { ButtonVariantType } from '../styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariantType
    fullWidth?: boolean
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    loading?: boolean
}
