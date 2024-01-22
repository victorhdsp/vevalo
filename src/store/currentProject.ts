import { create } from 'zustand'

import { generateId } from '@/assets/utils'
import { BudgetType, ProjectsType, ServiceType } from '@/assets/data/type'
import { CrudKeyNames, generateProjectCrud } from './utils'

import { useUser } from './User'

type CurrentProjectStore = {
  project: ProjectsType
  reset: () => void
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
  updateBudgets: (key, budget) => set((store) => {
    console.log(store.project)
    const project = generateProjectCrud(store.project, "budgets", key, budget)
    return { project }
  })
}))