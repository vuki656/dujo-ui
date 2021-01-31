import { createGlobalStyle } from 'styled-components'

import type { Theme } from './theme.types'

export const GlobalStyles = createGlobalStyle<{theme: Theme}>((props) => {
    return {
        '#__next': {
            height: '100%',
            width: '100%',
        },
        '*': { boxSizing: 'border-box' },
        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
        body: {
            backgroundColor: props.theme.palette.grey.light500,
            fontFamily: props.theme.typography.fontFamily.primary,
            margin: '0px',
        },
        html: {
            fontSize: '16px',
        },
        p: { margin: 0 },
    }
})
