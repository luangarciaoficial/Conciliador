import { ReactNode } from "react"

interface MenuItem {
    key: string,
    title: string,
    path?: string | undefined,
    icon?: ReactNode,
    protect: boolean,
    clasName?: string,
}

export interface Menu {
    Items: MenuItem[]
}