import type { TippyProps } from '@tippyjs/react'

export type TooltipProps = Omit<TippyProps, 'delay'> & {
    label: string
    enterDelay?: number
    exitDelay?: number
}
