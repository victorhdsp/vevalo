import { create } from 'zustand'

import { CostsType, ServiceType } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

type CurrentServiceStore = {
  service: ServiceType
  reset: () => void
  updateService: (key: keyof ServiceType, value: string) => void
  updateCost: (costId: string, key: keyof CostsType, value: string) => void
  createNewCost: () => void
  removeCost: (id: string) => void
}

const initialState: () => ServiceType = () => ({
  id: generateId(),
  name: '',
  description: '',
  costs: [],
  profit_margin: '100'
})

const newCostGenerate = () => ({
  id: generateId(),
  name: '',
  value: ''
})

export const useCurrentService = create<CurrentServiceStore>((set) => ({
  service: initialState(),
  reset: () => set(_ => ({ service: initialState() })),
  updateService: (key, value) => set(store => ({ service: { ...store.service, [key]: value } })),
  updateCost: (costId, key, value) => set(store => ({ service: { ...store.service, costs: store.service.costs.map(cost => {
    if (cost.id === costId) {
      return { ...cost, [key]: value }
    }
    return cost
  })}})),
  createNewCost: () => set(store => ({ service: { ...store.service, costs: [...store.service.costs, newCostGenerate()]}})),
  removeCost: (costId) => set(store => ({ service: { ...store.service, costs: store.service.costs.filter(cost => cost.id !== costId)}}))
}))