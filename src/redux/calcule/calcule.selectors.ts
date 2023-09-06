import { RootState } from "../store";
import { CalculeStateType } from "./types";

export const selectCalculeWithCompany = (rootReducer: RootState) => {    
    return {
        ...rootReducer.calculeReducer,
        company_name: rootReducer.companyReducer.company_name,
        company_cost: rootReducer.calculeReducer.company_cost || rootReducer.companyReducer.company_cost,
        employees: rootReducer.calculeReducer.employees || rootReducer.companyReducer.employees,
        day_hours: rootReducer.calculeReducer.day_hours || rootReducer.companyReducer.day_hours,
        days_in_week: rootReducer.calculeReducer.days_in_week || rootReducer.companyReducer.days_in_week,
        profit_margin: rootReducer.calculeReducer.profit_margin || rootReducer.companyReducer.services[0].margin_profit,
        estimated_time: rootReducer.calculeReducer.estimated_time || rootReducer.companyReducer.services[0].estimated_time,
        additionals: rootReducer.calculeReducer.additionals || rootReducer.companyReducer.services[0].additionals,
    } as CalculeStateType
}