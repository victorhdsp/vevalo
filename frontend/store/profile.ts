import { create } from 'zustand'

interface ProfileState {
    uid: string
    logo: string
    name: string
    monthlyCost: number
    workedDays: number
}

interface ProfileStore extends Partial<ProfileState> {
    updateProfile: (profile: ProfileState) => void
}

const useProfileFormStore = create<ProfileStore>((set) => ({
    updateProfile: (profile) => set((state) => ({
        ...state,
        ...profile 
    }))
}))

export default useProfileFormStore;