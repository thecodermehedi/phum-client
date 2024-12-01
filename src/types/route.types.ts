import { ReactNode } from "react"

export type TRoute = {
 path: string,
 element: ReactNode,
 children?: TRoute[]
}

export type TPath = {
 name: string,
 path?: string,
 element?: ReactNode,
 children?: TPath[]
}
