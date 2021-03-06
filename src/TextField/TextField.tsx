import React from 'react'

import {
    TextFieldErrorIcon,
    TextFieldHelperText,
    TextFieldHelperWrapper,
    TextFieldInput,
    TextFieldLabel,
    TextFieldRoot,
} from './TextField.styles'
import type { TextFieldProps } from './TextField.types'

export const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
    const {
        error = false,
        fullWidth = false,
        helperText,
        label,
        onChange: onChangeProp,
        ...other
    } = props

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onChangeProp?.(event)
    }

    return (
        <TextFieldRoot fullWidth={fullWidth}>
            {label ? (
                <TextFieldLabel>
                    {label}
                </TextFieldLabel>
            ) : null}
            <TextFieldInput
                {...other}
                onChange={onChange}
            />
            {helperText ? (
                <TextFieldHelperWrapper>
                    {error ? (
                        <TextFieldErrorIcon size="small" />
                    ) : null}
                    <TextFieldHelperText error={error}>
                        {helperText}
                    </TextFieldHelperText>
                </TextFieldHelperWrapper>
            ) : null}
        </TextFieldRoot>
    )
}
