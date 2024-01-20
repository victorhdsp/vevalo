import { create } from 'zustand'

import { BudgetType, ProfileType, ProjectsType, ServiceType, UserType, WeeklyHourType, WorkerType } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

import generateUser from '@/assets/data/starter'

type ProfileKeyNames = Exclude<keyof ProfileType["company"] | keyof ProfileType["fiscal"], "email"> 

type CrudKeyNames = "add" | "remove" | "update"
type CrudFunctions = (
  user: UserType,
  key: "workers" | "services" | "budgets" | "projects",
  action: CrudKeyNames,
  value: WorkerType | ServiceType | BudgetType | ProjectsType
) => UserType

type UserStore = {
  user: UserType
  updateUserData: (user: UserType) => void
  updateProfile: (key: ProfileKeyNames, value: string | WeeklyHourType[]) => void
  updateWorkers: (key: CrudKeyNames, worker: WorkerType) => void
  updateServices: (key: CrudKeyNames, service: ServiceType) => void
  updateBudgets: (key: CrudKeyNames, budget: BudgetType) => void
  updateProjects: (key: CrudKeyNames, project: ProjectsType) => void
}

const initialState: () => UserType = () => ({
  ...generateUser(generateId()),
})

const generateCrud:CrudFunctions = (user, key, action, value) => {

    const actions = {
      add () { user[key].push(value as any); return { ...user } },
      remove () { return { ...user, [key]: user[key].filter((w) => w.id !== value.id) } },
      update () { return { ...user, [key]: user[key].map((w) => w.id === value.id ? value : w) } },
    }

    return actions[action]()
}

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
    const user = generateCrud(store.user, "workers", key, worker)
    return { user }
  }),
  updateServices: (key, service) => set((store) => {
    const user = generateCrud(store.user, "services", key, service)
    return { user }
  }),
  updateBudgets: (key, budget) => set((store) => {
    const user = generateCrud(store.user, "budgets", key, budget)
    return { user }
  }),
  updateProjects: (key, project) => set((store) => {
    const user = generateCrud(store.user, "projects", key, project)
    return { user }
  }),
}))