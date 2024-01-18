import { create } from 'zustand'

import { BudgetType, ProjectsType } from '@/assets/data/type'
import { generateId } from '@/assets/utils'
import { useUser } from './User'

type CurrentProjectStore = ProjectsType & {
  reset: () => void
  createNewBudget: (budget: BudgetType) => void
  removeBudget: (id: string) => void
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
  ...initialState(),

  reset: () => set(_ => ({ ...initialState() })),
  createNewBudget: (budget) => set(store => ({ budgets: [ ...store.budgets, {...budget}] })),
  removeBudget: (budgetId) => set(store => ({ budgets: store.budgets.filter(b => b.id !== budgetId) }))
}))