import * as React from 'react'
import { SidebarContainerProps } from '@/types/SidebarTypes'
import Sidebar from '@/src/components/Sidebar'
import { MouseEventHandler } from 'react'

class SidebarContainer extends React.Component<SidebarContainerProps> {
	public state = {}

	constructor(props: SidebarContainerProps) {
		super(props)
	}

	public handleClick = () => {
		this.setState({})
	}

	public toggleSidebarOn: MouseEventHandler =
		() => {
			const { sidebarOn, setSidebarState } =
				this.props
			setSidebarState(!sidebarOn)
		}

	public render() {
		return (
			<Sidebar
				sidebarOn={this.props.sidebarOn}
				setSidebarOn={this.toggleSidebarOn}
			/>
		)
	}
}

export default SidebarContainer
