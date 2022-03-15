import styled from 'styled-components';
import React, { useState } from 'react';

type MainHeaderProps = {
    text: String,
    sidebarInfo: SidebarInfo
};

type SidebarInfo = {
    sidebarState: Boolean,
    setSidebarState : Function
}

const StyledMainHeader = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    display:flex;
    border-bottom: 1px solid #eeeeee;
    align-items: center;
`

const StyledTitle = styled.title`
    display: block;
    font-size: 30px;
    color: #666666;
    font-weight: 400;
    width: 100%;
    text-align: center;
`

const ImageWrapper = styled.div`
    padding: 60px 40px;
`;

const ImageBox = styled.img`
    display: block;
    width: 30px;
    height: 24px;
`
const MarginBox = styled.div`
    display: block;
    width: 30px;
    height: 24px;
    margin: auto 40px;
`


function MainHeader({ text, sidebarInfo } : MainHeaderProps){

    const onClick = () => {
        const {sidebarState, setSidebarState} = sidebarInfo
        setSidebarState(!sidebarState)
    }
    return (
        <StyledMainHeader>
            {/* <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" /> */}
            <ImageWrapper onClick={onClick}>
                <ImageBox src="/images/svg/list-button.svg" ></ImageBox>
            </ImageWrapper>
            <StyledTitle>{text}</StyledTitle>
            <MarginBox></MarginBox>
        </StyledMainHeader>)
    }

export default MainHeader;
