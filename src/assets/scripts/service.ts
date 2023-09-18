import { CalculeStateType, AdditionalType } from "@/redux/calcule/types";

/*
    hour value = company cost / (employees x (day hours * 30))
    base value = hour value x estimated time
    fixed value = base value + additional[]
    result = fixed value + (fixed value * profit margin)
*/

const additional_calc = (base_value:number, additional: AdditionalType) => {
    if (additional.type === 'porcentage') {
        return base_value * (additional.value / 100);
    } else {
        return additional.value;
    }
}

const execute = (data: CalculeStateType) => {
    const { company_cost, employees, day_hours, profit_margin } = data;
    const hour_value = (company_cost / (day_hours * 30)) * employees;
    const base_value = hour_value * data.estimated_time;
    const additional_value = data.additionals?.map(additional => additional_calc(base_value, additional));
    const fixed_value = additional_value?.reduce((acc, cur) => acc + cur, 0) || 0
    const total = (base_value + fixed_value) * ((profit_margin / 100) + 1)
    
    console.log({
        hour_value,
        base_value,
        fixed_value,
        total,
    });

    return {
        hour_value,
        base_value,
        fixed_value,
        total,
    };
}

export default execute;