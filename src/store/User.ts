import { create } from 'zustand'

import { ProfileType, ProjectsType, ServiceType, UserType, WeeklyHourType, WorkerType } from '@/assets/data/type'
import { generateId } from '@/assets/utils'
import { CrudKeyNames, generateUserCrud } from './utils'

import generateUser from '@/assets/data/starter'

type ProfileKeyNames = Exclude<keyof ProfileType["company"] | keyof ProfileType["fiscal"], "email"> 

type UserStore = {
  user: UserType
  updateUserData: (user: UserType) => void
  updateProfile: (key: ProfileKeyNames, value: string | WeeklyHourType[]) => void
  updateWorkers: (key: CrudKeyNames, worker: WorkerType) => void
  updateServices: (key: CrudKeyNames, service: ServiceType) => void
  updateProjects: (key: CrudKeyNames, project: ProjectsType) => void
}

const initialState: () => UserType = () => ({
  ...generateUser(generateId()),
})

export const useUser = create<UserStore>((set) => ({
  user: initialState(),
  updateUserData: (user) => set((store) => ({user})),
  updateProfile: (key, value) => set((store) => { 
    const profile = store.user.profile

    const actions: Record<ProfileKeyNames, () => void> = {
      name: () => { if(typeof value =="string") profile.company.name = value },
      segment: () => { if(typeof value =="string") profile.company.segment = value },
      tax_regime: () => { if(typeof value =="string") profile.company.tax_regime = value },
      administrative_expenses: () => { if(typeof value =="string") profile.fiscal.administrative_expenses = value },
      weekly_hours: () => { if(typeof value != "string") profile.fiscal.weekly_hours = value },
    }

    actions[key]()

    return { user: { ...store.user, profile } }
  }),
  updateWorkers: (key, worker) => set((store) => {
    const user = generateUserCrud(store.user, "workers", key, worker)
    return { user }
  }),
  updateServices: (key, service) => set((store) => {
    const user = generateUserCrud(store.user, "services", key, service)
    return { user }
  }),
  updateProjects: (key, project) => set((store) => {
    const user = generateUserCrud(store.user, "projects", key, project)
    return { user }
  }),
}))