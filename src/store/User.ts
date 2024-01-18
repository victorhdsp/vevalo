import { create } from 'zustand'

import { BudgetType, ProfileType, ProjectsType, ServiceType, UserType, WeeklyHourType, WorkerType } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

import generateUser from '@/assets/data/starter'

type ProfileKeyNames = Exclude<keyof ProfileType["company"] | keyof ProfileType["fiscal"], "email"> 
type WorkersKeyNames = "add" | "remove" | "update"
type ServicesKeyNames = "add" | "remove" | "update"
type BudgetsKeyNames = "add" | "remove" | "update"
type ProjectsKeyNames = "add" | "remove" | "update"

type UserStore = {
  user: UserType
  updateUserData: (user: UserType) => void
  updateProfile: (key: ProfileKeyNames, value: string | WeeklyHourType[]) => void
  updateWorkers: (key: WorkersKeyNames, worker: WorkerType) => void
  updateServices: (key: ServicesKeyNames, service: ServiceType) => void
  updateBudgets: (key: BudgetsKeyNames, budget: BudgetType) => void
  updateProjects: (key: ProjectsKeyNames, project: ProjectsType) => void
}

const initialState: () => UserType = () => ({
  ...generateUser(generateId()),
})

export const useUser = create<UserStore>((set) => ({
  user: initialState(),
  updateUserData: (user) => { 
    set({ user }) 
  },
  updateProfile: (key, value) => { 
    const user = useUser.getState().user

    const actions: Record<ProfileKeyNames, () => void> = {
      name: () => { if(typeof value =="string") user.profile.company.name = value },
      segment: () => { if(typeof value =="string") user.profile.company.segment = value },
      tax_regime: () => { if(typeof value =="string") user.profile.company.tax_regime = value },
      administrative_expenses: () => { if(typeof value =="string") user.profile.fiscal.administrative_expenses = value },
      weekly_hours: () => { if(typeof value != "string") user.profile.fiscal.weekly_hours = value },
    }

    return actions[key]()
  },
  updateWorkers: (key, worker) => {
    const user = useUser.getState().user

    const actions = {
      add: () => { user.workers.push(worker) },
      remove: () => { user.workers = user.workers.filter((w) => w.id !== worker.id) },
      update: () => {
        const index = user.workers.findIndex((w) => w.id === worker.id)
        user.workers[index] = worker
      }
    }

    return actions[key]()
  },
  updateServices: (key, service) => {
    const user = useUser.getState().user

    const actions = {
      add: () => { user.services.push(service) },
      remove: () => { user.services = user.services.filter((s) => s.id !== service.id) },
      update: () => {
        const index = user.services.findIndex((s) => s.id === service.id)
        user.services[index] = service
      }
    }

    return actions[key]()
  },
  updateBudgets: (key, budget) => {
    const user = useUser.getState().user

    const actions = {
      add: () => { user.budgets.push(budget) },
      remove: () => { user.budgets = user.budgets.filter((b) => b.id !== budget.id) },
      update: () => {
        const index = user.budgets.findIndex((b) => b.id === budget.id)
        user.budgets[index] = budget
      }
    }

    return actions[key]()
  },
  updateProjects: (key, project) => {
    const user = useUser.getState().user

    const actions = {
      add: () => { user.projects.push(project) },
      remove: () => { user.projects = user.projects.filter((p) => p.id !== project.id) },
      update: () => {
        const index = user.projects.findIndex((p) => p.id === project.id)
        user.projects[index] = project
      }
    }

    return actions[key]()
  },
}))