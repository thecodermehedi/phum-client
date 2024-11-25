import { ReactNode } from "react"

export type TRoute = {
 path: string,
 element: ReactNode,
 children?: TRoute[]
}

export type TSideItem = {
 key: string,
 label: ReactNode,
 children?: TSideItem[]
}

export type TPath = {
 name?: string,
 path?: string,
 element?: ReactNode,
 children?: TPath[]
}
