import * as React from 'react'
import styled from 'styled-components'
import { SidebarProps, SidebarWrapperProps } from '@/types/SidebarTypes'

const SidebarWrapper = styled.section<SidebarWrapperProps>`
	display: ${(props) => (props.sidebarOn ? 'block' : 'block')};
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 300px;
	background-color: #3f51b5;
	transition: all 0.5s;
	transform: translate3d(${(props) => (props.sidebarOn ? '0%' : '-100%')}, 0, 0);
	opacity: ${(props) => (props.sidebarOn ? 1 : 0)};
	z-index: 10;
`

const SidebarBackground = styled.div<SidebarWrapperProps>`
	position: absolute;
	background: rgba(0, 0, 0, 0.2);
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	opacity: ${(props) => (props.sidebarOn ? 1 : 0)};
	${(props) => (props.sidebarOn ? 'z-index: 0;' : '')}
	transform:  translate3d(
    ${(props) => (props.sidebarOn ? '0%' : '-100%')}, 0, 0
  );
`

const Sidebar = ({ sidebarOn, setSidebarOn }: SidebarProps) => (
	<>
		<SidebarWrapper sidebarOn={sidebarOn}>
			<button onClick={setSidebarOn}>닫기</button>
		</SidebarWrapper>
		<SidebarBackground sidebarOn={sidebarOn} onClick={setSidebarOn}></SidebarBackground>
	</>
)

export default Sidebar
