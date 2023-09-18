export interface AdditionalType {
    id: string,
    name: string,
    type: 'porcentage' | 'fixed',
    value: number,
}

export interface CalculeStateType {
    employees: number,
    day_hours: number,
    days_in_week: number,
    company_cost: number,
    estimated_time: number,
    profit_margin: number,
    additionals?: AdditionalType[]
}
