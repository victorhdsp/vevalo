import { create } from 'zustand'

import { PageNames } from '@/assets/data/sitemap'

type MenuStore = {
  currentPage: PageNames
  lastPage?: PageNames
  EnterOnOtherPage: (pageName: PageNames) => void
}

export const useMenu = create<MenuStore>((set) => ({
  currentPage: 'dashboard',
  EnterOnOtherPage: (pageName) => set(store => ({ currentPage: pageName , lastPage: store.currentPage}))
}))