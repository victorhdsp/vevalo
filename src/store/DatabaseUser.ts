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
  saveOnDatabase: (user) => {
    const isNewUser = useUserDatabase.getState().user === null

    if (isNewUser) {
      createNewUserData(user.id, { ...user })
    } else {
      updateUserData(user.id, { ...user })
    }
  },
  getFromDatabase: () => {
    // get user from database
    getUserData().then((user) => {
      if (user) {
        set({ user })
      } else {
        set({ user: null })
        console.log('No user found')
      }
    })
  }
}))