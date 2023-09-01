import { createSlice } from '@reduxjs/toolkit';
import { AdditionalType } from '../calcule/types';

export type ServicesType = {
    id: string;
    name: string;
    estimated_time: number;
    margin_profit: number;
    additionals: AdditionalType[];
}

export interface CompanyStateType {
    company_name: string;
    company_cost: number;
    employees: number;
    day_hours: number;
    days_in_week: number;
    services: ServicesType[];
}

const initialState: CompanyStateType = {
    company_name: '',
    company_cost: 0,
    employees: 0,
    day_hours: 0,
    days_in_week: 0,
    services: [
        {
            id: Math.random().toString(36).substr(2, 9),
            name: 'Serviço 1',
            estimated_time: 0,
            margin_profit: 0,
            additionals: []
        },
        {
            id: Math.random().toString(36).substr(2, 9),
            name: 'Serviço 2',
            estimated_time: 0,
            margin_profit: 0,
            additionals: []
        },
        {
            id: Math.random().toString(36).substr(2, 9),
            name: 'Serviço 3',
            estimated_time: 0,
            margin_profit: 0,
            additionals: []
        }
    ]
}

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.company_name = action.payload;
        },
        changeCost: (state, action) => {
            state.company_cost = Number(action.payload);
        },
        changeEmployees: (state, action) => {
            state.employees = Number(action.payload);
        },
        changeDayHours: (state, action) => {
            state.day_hours = Number(action.payload);
        },
        changeDaysInWeek: (state, action) => {
            state.days_in_week = Number(action.payload);
        },
        changeService: (state, action) => {
            const index = state.services.findIndex(service => service.id === action.payload.id);
            state.services[index] = action.payload;
        },
        addNewAdditional: (state, action) => {
            const index = state.services.findIndex(service => service.id === action.payload.id);
            state.services[index].additionals.push({
                id: Math.random().toString(36).substr(2, 9),
                name: '',
                type: 'fixed',
                value: 0
            });
        },
        removeAdditional: (state, action) => {
            const index = state.services.findIndex(service => service.id === action.payload.service_id);
            const additionalIndex = state.services[index].additionals.findIndex(additional => additional.id === action.payload.additional_id);
            state.services[index].additionals.splice(additionalIndex, 1);
        },
        changeAdditional: (state, action) => {
            const index = state.services.findIndex(service => service.id === action.payload.service_id);
            const additionalIndex = state.services[index].additionals.findIndex(additional => additional.id === action.payload.additional_id);
            state.services[index].additionals[additionalIndex] = action.payload.additional;
        }
    }
});

export const { changeName, changeCost, changeEmployees, changeDayHours, changeDaysInWeek, addNewAdditional, changeAdditional, changeService, removeAdditional } = companySlice.actions;
export default companySlice.reducer;