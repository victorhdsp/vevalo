import './app.scss'
import './assets/scripts/service'

import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { Header } from '@/components/organisms/Header'
import { Aside } from '@/components/organisms/Aside'

import { Home } from '@/components/pages/Home'
import { History } from '@/components/pages/History'
import { Settings } from '@/components/pages/Settings'

export interface Sitemap {
  home: ReactNode
  history: ReactNode
  settings: ReactNode
}

function App() {
  const currentPage = useSelector((rootReducer: RootState) => rootReducer.managerReducer.system.currentPage)
  
  const pages: Sitemap = {
    home: <Home />,
    history: <History />,
    settings: <Settings />
  }

  return (
    <>
      <Header />
      <div className='content'>
        <Aside />
        <main>
          { pages[currentPage] }
        </main>
      </div>
    </>
  )
}

export default App
