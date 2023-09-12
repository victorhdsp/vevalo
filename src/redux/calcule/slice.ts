import { createSlice } from '@reduxjs/toolkit'
import { CalculeStateType } from './types'

const initialState: CalculeStateType = {
    employees: 0,
    day_hours: 0,
    days_in_week: 0,
    company_cost: 0,
    estimated_time: 0,
    profit_margin: 0,
    additionals: undefined,
}

const calculeSlice = createSlice({
    name: 'calcule',
    initialState,
    reducers: {
        changeUniqueInput: (state, action) => {
            const name = action.payload.name as keyof CalculeStateType
            state[name] = name === 'additionals' ?  action.payload.value : Number(action.payload.value)
        },
        addNewAdditional: (state) => {
            const id = Math.random().toString(36).substr(2, 9)
            state.additionals?.push({ id, name: '', type: 'fixed', value: 0 })
        },
        removeAdditional: (state, action) => {
            const { id } = action.payload
            state.additionals = state.additionals?.filter(additional => additional.id !== id)
        },
        changeAdditional: (state, action) => {
            const { id, name, type, value } = action.payload
            const index = state.additionals?.findIndex(additional => additional.id === id)
            if (state.additionals && index !== undefined && index !== -1) {
                state.additionals[index].name = name
                state.additionals[index].type = type
                state.additionals[index].value = Number(value)
            }
        },
        resetAllInputs: (state) => {
            state.employees = 0
            state.day_hours = 0
            state.days_in_week = 0
            state.company_cost = 0
            state.estimated_time = 0
            state.profit_margin = 0
            state.additionals = []
        },
        setAllInputs: (state, action) => {
            state.employees = action.payload?.employees || state.employees
            state.day_hours = action.payload?.day_hours || state.day_hours
            state.days_in_week = action.payload?.days_in_week || state.days_in_week
            state.company_cost = action.payload?.company_cost || state.company_cost
            state.estimated_time = action.payload?.estimated_time || state.estimated_time
            state.profit_margin = action.payload?.profit_margin || state.profit_margin
            state.additionals = action.payload?.additionals || state.additionals
        }
    },
})

export const { 
  addNewAdditional, 
  removeAdditional, 
  changeAdditional,
  resetAllInputs,
  setAllInputs,
  changeUniqueInput,
} = calculeSlice.actions
export default calculeSlice.reducer