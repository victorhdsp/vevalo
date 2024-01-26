import { create } from 'zustand'

import { BudgetType, CostsType, ServiceType } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

import { useUser } from '@/store/User'
const services = useUser.getState().user.services

type BudgetKeyNames = Exclude<keyof BudgetType, "costs" | "id" | "result"> 

type CurrentBudgetStore = {
  budget: BudgetType
  reset: () => void
  setBudget: (budget: BudgetType) => void
  changeCostValue: (name: keyof CostsType, value:string) => void
  updateBudget: (key: BudgetKeyNames, value: string|ServiceType) => void
}

const initialState: () => BudgetType = () => ({
  id: generateId(),
  service: services[0],
  worked_hours: 0,
  profit_margin: '0',
  discount: '0',
  costs: services[0]?.costs || [],
})

export const useCurrentBudget = create<CurrentBudgetStore>((set) => ({
  budget: initialState(),
  reset: () => set(_ => ({ budget: initialState() })),
  setBudget: (budget) => set(_ => ({ budget })),

  changeCostValue: (id, value) => set(store => {
    const budget = store.budget
    budget.costs = budget.costs.map(cost => ({ ...cost, value: cost.id === id ? value: cost.value })) 
    return { budget }
  }),

  updateBudget: (key, value) => set((store) => { 
    const budget = store.budget

    const actions: Record<BudgetKeyNames, () => void> = {
      discount: () => { if(typeof value =="string") budget.discount = value },
      profit_margin: () => { if(typeof value =="string") budget.profit_margin = value },
      worked_hours: () => { if(typeof value =="string") budget.worked_hours = parseFloat(value) },
      service: () => {
        if(typeof value !="string") {
          budget.service = value
          budget.costs = value.costs.map(cost => ({ ...cost,  id: generateId() }))
        }
      }
    }

    actions[key]()
    return { budget }
  })
}))