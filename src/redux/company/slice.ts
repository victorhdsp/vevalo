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
    ]
}

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setAllInputs: (state, action) => {
            state.company_name = action.payload.company_name || state.company_name ;
            state.company_cost = action.payload.company_cost || state.company_cost;
            state.employees = action.payload.employees || state.employees;
            state.day_hours = action.payload.day_hours || state.day_hours;
            state.days_in_week = action.payload.days_in_week || state.days_in_week;
            state.services = action.payload.services || state.services;
        },
        addNewService: (state) => {
            state.services.push({
                id: Math.random().toString(36).substr(2, 9),
                name: '',
                estimated_time: 0,
                margin_profit: 0,
                additionals: []
            });
        },
        removeService: (state, action) => {
            state.services = state.services.filter(service => service.id !== action.payload.id);
        }
    }
});

export const { setAllInputs, addNewService, removeService } = companySlice.actions;
export default companySlice.reducer;