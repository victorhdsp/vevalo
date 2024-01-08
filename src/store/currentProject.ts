import { create } from 'zustand'

import { BudgetTypes, ProjectsTypes } from '@/assets/data/type'
import { generateId } from '@/assets/utils'
import { useUser } from './User'

type CurrentProjectStore = ProjectsTypes & {
  reset: () => void
  createNewBudget: (budget: BudgetTypes) => void
  removeBudget: (id: string) => void
}

const fiscal = useUser.getState().profile.fiscal

const initialState: () => ProjectsTypes = () => ({
  id: generateId(),
  expenses: `${fiscal.administrative_expenses + fiscal.worker.salary}`,
  name: '',
  status: 'ongoing',
  discount: '0',
  impost: '0',
  budgets: []
})

export const useCurrentProject = create<CurrentProjectStore>((set) => ({
  ...initialState(),

  reset: () => set(_ => ({ ...initialState() })),
  createNewBudget: (budget) => set(store => ({ budgets: [ ...store.budgets, {...budget}] })),
  removeBudget: (budgetId) => set(store => ({ budgets: store.budgets.filter(b => b.id !== budgetId) }))
}))