import * as React from 'react';
import styled from 'styled-components';
import {SidebarProps, SidebarWrapperProps} from './SidebarTypes';

const SidebarWrapper = styled.section<SidebarWrapperProps>`
display: ${props => props.sidebarOn ? 'block' : 'none'} ;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background-color: #3f51b5;

`

const Sidebar = ({sidebarOn, setSidebarOn}: SidebarProps) => (
    <SidebarWrapper sidebarOn={sidebarOn}>
        <button onClick={setSidebarOn}>닫기</button>
    </SidebarWrapper>
)

export default Sidebar;