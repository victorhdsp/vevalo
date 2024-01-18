import { create } from 'zustand'

interface TaxRegimeStore {
  taxRegimes: { value: string, label: string }[]
}

export const useTaxRegime = create<TaxRegimeStore>((set) => ({
  taxRegimes: [
    { value: 'none', label: 'Nenhum' },
    { value: 'MEI', label: 'MEI' },
    { value: 'simples', label: 'Simples Nacional' },
  ]
}))