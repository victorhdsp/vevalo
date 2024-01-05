import { UserTypes } from "./type";

const User: UserTypes = {
  id: '',
  profile: {
    name: '',
    tax_regime: '',
    segment: '',
    email: '',
    fiscal: {
      administrative_expenses: '',
      weekly_hours: 0,
      worker: {
        weekly_hours: 0,
        salary: '',
      }
    },
  },
  projects: [],
  budgets: [],
  services: [],
}

export default User