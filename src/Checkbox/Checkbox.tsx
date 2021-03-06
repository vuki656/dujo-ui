import * as React from 'react'

import {
    CheckboxCheckmark,
    CheckboxInput,
    CheckboxLabel,
    CheckboxRectangle,
    CheckboxRoot,
} from './Checkbox.styles'
import type { CheckboxProps } from './Checkbox.types'

export const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
    const {
        checked,
        className,
        label,
        onChange,
        ...other
    } = props

    return (
        <CheckboxRoot className={className}>
            <CheckboxInput
                checked={checked}
                onChange={onChange}
                type="checkbox"
                {...other}
            />
            <CheckboxRectangle checked={checked}>
                <CheckboxCheckmark
                    checked={checked}
                    size="small"
                />
            </CheckboxRectangle>
            {label ? (
                <CheckboxLabel>
                    {label}
                </CheckboxLabel>
            ) : null}
        </CheckboxRoot>
    )
}
