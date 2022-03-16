import type { NextPage } from 'next'
import AppMainHeader from '@/src/components/AppMainHeader'
import GlobalStyle from '@/src/components/GlobalStyle'
import GlobalFonts from '@/src/components/GlobalFonts'
import styled from 'styled-components'
import SidebarContainer from 'src/containers/SidebarContainer'
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
      <AppMainHeader
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
