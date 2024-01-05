export type Status = 'archived' | 'recused' | 'ongoing'

export type Money = string

export type CostsTypes = {
  id: string;
  name: string;
  value: Money 
}

export interface WorkerType {
  weekly_hours: number;
  salary: Money;
}

export interface ServiceTypes {
  id: string;
  name: string;
  costs: CostsTypes[];
  profit_margin: Money;
}

export interface ResulBudgetTypes {
  cost: {
    admin: number;
    salary: number;
    total: number;
  };
  discount: number;
  received: number;
  total: number;
}

export interface BudgetTypes {
  id: string;
  service: ServiceTypes;
  discount: Money
  worked_hours: number;
  costs: CostsTypes[];
  profit_margin: Money;
  result?: ResulBudgetTypes
}

export interface ProjectsTypes {
  id: string;
  name: string;
  status: Status
  discount: Money;
  expenses: Money;
  impost: Money
  budgets: BudgetTypes[];
}

export interface ProfileType {
  name: string;
  tax_regime: string;
  segment: string;
  email: string;
  fiscal: {
    administrative_expenses: Money;
    weekly_hours: number;
    worker: WorkerType;
  };
}

export interface UserTypes {
  id: string
  profile: ProfileType;
  services: ServiceTypes[];
  budgets: BudgetTypes[];
  projects: ProjectsTypes[];
}