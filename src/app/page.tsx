'use client';

import css from './style.module.scss'

import Aside from '@/components/Stars/Aside'

import Profile from '@/components/Stars/Profile'
import NewProject from '@/components/Stars/NewProject'
import History from '@/components/Stars/History'

import { useMenu } from '@/store/Menu';
import { PageNames } from '@/assets/data/sitemap';

export default function Home() {
  const currentPage = useMenu(store => store.currentPage)
  const lastPage = useMenu(store => store.lastPage)

  const pageController =  (pageName: PageNames) => {
    if(pageName === currentPage) return 'current'
    if(pageName === lastPage) return 'last'
    return false
  }

  return (
    <>
      <Aside />
      <main className={css["dashboard"]}>
        <div className={css["pages"]}>
          <span className={css[`${pageController("profile")}`]}>
            <Profile />
          </span>
          <span  className={css[`${pageController("dashboard")}`]}>
            <NewProject />
          </span>
        </div>
        <History />
      </main>
    </>
  )
}
