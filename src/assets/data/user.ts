import { BudgetType, ProjectsType, ServiceType, UserType, WorkerType } from "./type";

const services: ServiceType[] = [
  {
    id: 'service1',
    name: 'Landing Page',
    description: 'Landing Page',
    costs: [
      { id:'cost1', name: 'Hospedagem', value: '30' },
      { id: 'cost2', name: 'Domínio', value: '40' },
    ],
    profit_margin: '20%',
  }
]

const budgets: BudgetType[] = [
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
    },
  }
]

const projects: ProjectsType[] = [
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

const workers: WorkerType[] = [
  {
    id: 'worker1',
    name: 'John Doe',
    salary: '450',
    weekly_hours: []
  },
]

const User: UserType = {
  id: 'user1',
  profile: {
    company: {
      name: 'John Doe Desenvolvimento',
      tax_regime: 'simples',
      segment: 'technology',
      email: 'johndoe@gmail.com',
    },
    fiscal: {
      administrative_expenses: '834',
      weekly_hours: [
        { name: 'seg', label: 'Seg', value: '8' },
        { name: 'ter', label: 'Ter', value: '8' },
        { name: 'qua', label: 'Qua', value: '8' },
        { name: 'qui', label: 'Qui', value: '8' },
        { name: 'sex', label: 'Sex', value: '8' },
        { name: 'sab', label: 'Sab', value: '0' },
        { name: 'dom', label: 'Dom', value: '0' }
      ],
    },
  },
  workers,
  projects,
  services,
}

export default User