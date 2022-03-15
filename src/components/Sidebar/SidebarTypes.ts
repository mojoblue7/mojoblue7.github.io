import { MouseEventHandler } from "react"

export type SidebarProps = {
    sidebarOn : Boolean,
    setSidebarOn : MouseEventHandler
}

export type SidebarContainerProps = {
    sidebarOn : Boolean,
    setSidebarState : Function
}

export type SidebarWrapperProps = {
    sidebarOn: Boolean
}
