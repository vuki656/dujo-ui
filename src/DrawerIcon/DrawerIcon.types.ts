import React from 'react'

export type DrawerIconProps = React.HTMLAttributes<HTMLDivElement> & {
    icon: React.ReactElement,
    tooltipText?: string,
    selected?: boolean,
    onClick?(): void,
}
