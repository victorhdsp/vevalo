import { create } from 'zustand'

import { generateId } from '@/assets/utils'
import { BudgetType, ProjectsType, ServiceType } from '@/assets/data/type'
import { CrudKeyNames, generateProjectCrud } from './utils'

import { useUser } from './User'

type ProjectKeyNames = Exclude<keyof ProjectsType, "status" | "expenses" | "budgets" | "id"> 

type CurrentProjectStore = {
  project: ProjectsType
  reset: () => void
  updateProject: (key: ProjectKeyNames, value:string) => void
  updateBudgets: (key: CrudKeyNames, budget: BudgetType) => void
}

const fiscal = useUser.getState().user.profile.fiscal

const initialState: () => ProjectsType = () => ({
  id: generateId(),
  expenses: `${fiscal.administrative_expenses}`,
  name: '',
  status: 'ongoing',
  discount: '0',
  impost: '0',
  budgets: []
})

export const useCurrentProject = create<CurrentProjectStore>((set) => ({
  project: initialState(),
  reset: () => set(_ => ({ project: initialState() })),
  updateProject: (key, value) => set(store => {
    const project = store.project
    const actions: Record<ProjectKeyNames, () => void> = {
      name: () => { if(typeof value =="string") project.name = value },
      discount: () => { if(typeof value =="string") project.discount = value },
      impost: () => { if(typeof value =="string") project.impost = value },
    }
    actions[key]()
    return { project }
  }),
  updateBudgets: (key, budget) => set((store) => {
    const project = generateProjectCrud(store.project, "budgets", key, budget)
    return { project }
  })
}))