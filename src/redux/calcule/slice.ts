import { createSlice } from '@reduxjs/toolkit'

export type AdditionalType = {
    id: string,
    name: string,
    type: 'porcentage' | 'fixed',
    value: number,
}

export type CalculeStateType = {
    employees: number,
    day_hours: number,
    days_in_week: number,
    company_cost: number,
    estimated_time: number,
    profit_margin: number,
    additionals: AdditionalType[]
}

const initialState: CalculeStateType = {
    employees: 0,
    day_hours: 0,
    days_in_week: 0,
    company_cost: 0,
    estimated_time: 0,
    profit_margin: 0,
    additionals: [],
}

const calculeSlice = createSlice({
    name: 'calcule',
    initialState,
    reducers: {
        changeEmployees: (state, action) => {
            state.employees = Number(action.payload)
        },
        changeDayHours: (state, action) => {
            state.day_hours = Number(action.payload)
        },
        changeDaysInWeek: (state, action) => {
            state.days_in_week = Number(action.payload)
        },
        changeCompanyCost: (state, action) => {
            state.company_cost = Number(action.payload)
        },
        changeEstimatedTime: (state, action) => {
            state.estimated_time = Number(action.payload)
        },
        changeProfitMargin: (state, action) => {
            state.profit_margin = Number(action.payload)
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
        }
    },
})

export const { 
    changeEmployees,
    changeDayHours, 
    changeDaysInWeek,
    changeCompanyCost, 
    changeEstimatedTime, 
    changeProfitMargin, 
    addNewAdditional, 
    removeAdditional, 
    changeAdditional,
    resetAllInputs
} = calculeSlice.actions
export default calculeSlice.reducer