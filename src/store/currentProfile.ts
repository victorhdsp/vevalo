import { create } from 'zustand'

import { ProfileType } from '@/assets/data/type'

import { useUser } from '@/store/User'

type CurrentProfileStore = ProfileType & {
  reset: () => void
  setEmail: (email: string) => void
  saveProfile: (profile: ProfileType) => void
}

const initialState: () => ProfileType = () => ({
  ...useUser.getState().profile
})

export const useCurrentProfile = create<CurrentProfileStore>((set) => ({
  ...initialState(),

  setEmail: (email) => set(store => ({ email })),
  reset: () => set(_ => ({ ...initialState() })),
  saveProfile: (profile) => set(store => ({ ...profile }))
}))