import { BudgetTypes, ProjectsTypes, ServiceTypes, UserTypes } from "./type";

const services: ServiceTypes[] = [
  {
    id: 'service1',
    name: 'Landing Page',
    costs: [
      { id:'cost1', name: 'Hospedagem', value: '30' },
      { id: 'cost2', name: 'Domínio', value: '40' },
    ],
    profit_margin: '20%',
  }
]

const budgets: BudgetTypes[] = [
  {
    id: 'budget1',
    service: services[0],
    discount: '0',
    worked_hours: 24,
    profit_margin: '20%',
    costs: [
      { id:'cost3', name: 'Hospedagem', value: '30' },
      { id:'cost4', name: 'Domínio', value: '40' },
      { id:'cost5', name: 'Luz', value: '10%' },
    ],
    result: {
      cost: {
        admin: 259.61,
        salary: 450,
        total: 709.61
      },
      discount: 0,
      received: 129.2,
      total: 838.63
    }
  }
]

const projects: ProjectsTypes[] = [
  {
    id: 'project1',
    name: 'Project 1',
    status: 'archived',
    expenses: '3900',
    discount: '0',
    impost: '150',
    budgets: budgets,
  },
]

const User: UserTypes = {
  id: 'user1',
  profile: {
    name: 'John Doe Desenvolvimento',
    tax_regime: 'simples',
    segment: 'technology',
    email: 'johndoe@gmail.com',
    fiscal: {
      administrative_expenses: '834',
      weekly_hours: 40,
      worker: {
        weekly_hours: 40,
        salary: '3000',
      }
    },
  },
  projects,
  budgets,
  services,
}

export default User