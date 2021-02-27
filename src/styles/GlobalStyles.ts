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
            fontFamily: props.theme.typography.fontFamily.primary,
            height: '100%',
            margin: '0px',
        },
        html: {
            fontSize: '16px',
            height: '100%',
        },
        p: { margin: 0 },
    }
})
