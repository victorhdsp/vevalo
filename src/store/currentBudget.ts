import { create } from 'zustand'

import { BudgetTypes, ServiceTypes } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

import { useUser } from '@/store/User'
const services = useUser.getState().services

type CurrentBudgetStore = BudgetTypes & {
  selectService: (service: ServiceTypes) => void
  reset: () => void
  changeCostValue: (name:string, value:string) => void
}

const initialState: () => BudgetTypes = () => ({
  id: generateId(),
  service: services[0],
  worked_hours: 0,
  profit_margin: '20%',
  discount: '0',
  costs: services[0]?.costs || [],
})

export const useCurrentBudget = create<CurrentBudgetStore>((set) => ({
  ...initialState(),

  selectService: (service) => set(_ => {
    const costs = service.costs.map(cost => ({ ...cost,  id: generateId() }))
    return { service, costs}
  }),

  reset: () => set(_ => ({ 
    ...initialState()
  })),

  changeCostValue: (id, value) => set(store => ({
    costs: store.costs.map(cost => ({
      ...cost, 
      value: cost.id === id ? value : cost.value 
    }))
  })),
}))