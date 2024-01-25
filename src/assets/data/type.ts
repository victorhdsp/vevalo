export type Status = 'archived' | 'recused' | 'ongoing'

export type Money = string

export type CostsType = {
  id: string;
  name: string;
  value: Money 
}

export interface WorkerType {
  id: string;
  name: string;
  salary: Money;
  weekly_hours: WeeklyHourType[];
}

export interface ServiceType {
  id: string;
  name: string;
  description: string;
  costs: CostsType[];
  profit_margin: Money;
}

export interface ResultBudgetType {
  cost: {
    admin: number;
    salary: number;
    total: number;
  };
  discount: number;
  received: number;
  total: number;
}

export interface BudgetType {
  id: string;
  service: ServiceType;
  discount: Money
  worked_hours: number;
  costs: CostsType[];
  profit_margin: Money;
  result?: ResultBudgetType
}

export interface ProjectsType {
  id: string;
  name: string;
  status: Status
  discount: Money;
  expenses: Money;
  impost: Money
  budgets: BudgetType[];
}

export type WeeklyHourType = {
  name: string;
  label: string;
  value: string;
}

export interface ProfileType {
  company: {
    name: string;
    tax_regime: string;
    segment: string;
    email: string;
  }
  fiscal: {
    administrative_expenses: Money;
    weekly_hours: WeeklyHourType[];
  };
}

export interface UserType {
  id: string
  profile: ProfileType;
  workers: WorkerType[];
  services: ServiceType[];
  projects: ProjectsType[];
}