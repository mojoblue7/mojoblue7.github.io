import type { NextPage } from 'next'
import MainHeader from '@components/Header/MainHeader'
import GlobalStyle from '@components/GlobalStyle'
import GlobalFonts from '@components/GlobalFonts'
import styled from 'styled-components'
import SidebarContainer from '@components/Sidebar/SidebarContainer'
import { useState } from 'react'

const Container = styled.div`

`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  flex: 1;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`

const Home: NextPage = () => {
  const [sidebarState, setSidebarState] = useState<Boolean>(false)

  return (
    <Container>
      <GlobalFonts />
      <GlobalStyle />
      <MainHeader
        text={'mojoblue7.github.io'}
        sidebarInfo={
          {
            sidebarState: sidebarState,
            setSidebarState: setSidebarState
          }
        }
      />
      <Main>
      </Main>
      {/* <Footer></Footer> */}
      <SidebarContainer 
        sidebarOn={sidebarState} 
        setSidebarState={setSidebarState}  />
    </Container>
  )
}

export default Home
