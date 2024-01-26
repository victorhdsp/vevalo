import { BudgetType, CostsType, Money, ServiceType, WeeklyHourType, WorkerType } from "../data/type";

export const makeFinance = (num: number|string): string => {
  if(typeof num === 'string') num = parseFloat(num);
  return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export const calculeWeeklyHours = (weekly_hours: WeeklyHourType[]) => {
  const weekly_hours_value = weekly_hours.reduce((acc, cur) => acc + parseInt(cur.value), 0)
  return weekly_hours_value
}

export const calculeWeeklyHoursPerDay = (weekly_hours: WeeklyHourType[], days=7) => {
  return calculeWeeklyHours(weekly_hours) / days
}

export const calculeBudget = (
  administrative_expenses: string,
  weekly_hours: number,
  workers: WorkerType[],
  costs: CostsType[],
  discount: string,
  profit_margin: string,
  worked_hours: number
) => 
{
  let workersHoursValue = 0
  let variableCostValue = 0
  let discountValue = 0

  const contextWorkers = workers.map(worker => ({ 
    salary: parseFloat(worker.salary), 
    weekly_hours: calculeWeeklyHours(worker.weekly_hours)
  }))

  const fixedCosts = costs.filter(cost => !cost.value.includes('%'));
  const variableCosts = costs.filter(cost => cost.value.includes('%'));
  const parseCosts = (budgetCosts:CostsType[]) => budgetCosts.map(cost => ({...cost, value: parseFloat(cost.value)}))

  if(!workers) return;
  contextWorkers.forEach(worker => workersHoursValue += worker.salary /( worker.weekly_hours * 4));
  const companyHourValue = parseFloat(administrative_expenses) / (weekly_hours * 4);
  const totalHoursValue = workersHoursValue + companyHourValue;
  
  const fixedCostValue = parseCosts(fixedCosts).reduce((acc, cost) => acc + cost.value, 0);
  
  const baseBudgetCost = (totalHoursValue * worked_hours + fixedCostValue);
  
  const receivedValue = profit_margin.includes('%') ? baseBudgetCost * (parseFloat(profit_margin) / 100) : parseFloat(profit_margin)
  
  parseCosts(variableCosts).forEach(cost => variableCostValue += cost.value * baseBudgetCost / 100);
  
  discountValue = discount.includes('%') ? parseFloat(discount) * baseBudgetCost / 100 : parseFloat(discount)
  
  const budgetCost = baseBudgetCost + variableCostValue;

  return {
    cost: {
      admin: fixedCostValue + variableCostValue + (companyHourValue * worked_hours),
      salary: workersHoursValue * worked_hours,
      total: budgetCost || 0,
    },
    discount: discountValue || 0,
    received: receivedValue || 0,
    total: budgetCost + receivedValue - discountValue
  };
}

export const calculeProject = (budgets:BudgetType[], impost:string, discount:string) => {
  const totalBudgets = budgets.length > 0 ? budgets.map(budget => budget.result?.total || 0).reduce((acc, cur) => acc + cur) : 0
  
  const totalImpost = impost.includes('%') ? parseFloat(impost) * totalBudgets / 100 : parseFloat(impost)
  
  const totalDiscount = discount.includes('%') ? parseFloat(discount) * totalBudgets / 100 : parseFloat(discount)
  
  const totalReceived = totalBudgets + totalImpost - totalDiscount

  return {
    totalReceived,
    totalImpost,
    totalDiscount,
    totalBudgets
  }
}