import { create } from 'zustand'

import { UserType } from '@/assets/data/type'

import { getUserData, createNewUserData, updateUserData } from '@/services/firebase/database'

type DatabaseUserStore = {
  user: UserType | null
  saveOnDatabase: (user: UserType) => void
  getFromDatabase: () => void
}

export const useUserDatabase = create<DatabaseUserStore>((set) => ({
  user: null,
  // updateService: (key, value) => set(store => ({ service: { ...store.service, [key]: value } })),
  saveOnDatabase: (user) => set((store) => {
    const isNewUser = useUserDatabase.getState().user === null

    if (isNewUser) {
      createNewUserData(user.id, { ...user })
    } else {
      updateUserData(user.id, { ...user })
    }

    return { user }
  }),
  getFromDatabase: () => set((store) => {
    // get user from database
    getUserData().then((user) => {
      if (user === false) {
        console.log('user not found')
        return { user: null }
      }
      
      set({ user})
    })

    return { user: null }
  })
}))