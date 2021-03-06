import * as React from 'react'

import {
    ButtonIconWrapper,
    ButtonRoot,
    Loader,
} from './Button.styles'
import type { ButtonProps } from './Button.types'

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const {
        children,
        disabled = false,
        endIcon,
        fullWidth = false,
        iconSpacing,
        loading = false,
        startIcon,
        type = 'button',
        variant = 'primary',
        ...other
    } = props

    return (
        <ButtonRoot
            disabled={loading || disabled}
            fullWidth={fullWidth}
            type={type}
            variant={variant}
            {...other}
        >
            {loading ? (
                <Loader />
            ) : (
                <>
                    {startIcon ? (
                        <ButtonIconWrapper
                            iconSpacing={iconSpacing}
                            position="start"
                        >
                            {startIcon}
                        </ButtonIconWrapper>
                    ) : null}
                    {children}
                    {endIcon ? (
                        <ButtonIconWrapper
                            iconSpacing={iconSpacing}
                            position="end"
                        >
                            {endIcon}
                        </ButtonIconWrapper>
                    ) : null}
                </>
            )}
        </ButtonRoot>
    )
}
