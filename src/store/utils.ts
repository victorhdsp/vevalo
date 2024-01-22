import { BudgetType, ProjectsType, ServiceType, UserType, WorkerType } from "@/assets/data/type";

export type CrudKeyNames = "add" | "remove" | "update"

type Crud = (
  root: any,
  key: string,
  action: CrudKeyNames,
  value: any
) => any

const generateCrud:Crud = (root, key, action, value) => {

  const actions = {
    add () { root[key].push(value as any); return { ...root } },
    remove () { return { ...root, [key]: root[key].filter((w:any) => w.id !== value.id) } },
    update () { return { ...root, [key]: root[key].map((w:any) => w.id === value.id ? value : w) } },
  }

  return actions[action]()
}

type UserCrud = (
  user: UserType,
  key: "workers" | "services" | "projects",
  action: CrudKeyNames,
  value: WorkerType | ServiceType | ProjectsType
) => UserType

export const generateUserCrud:UserCrud = (user, key, action, value) => generateCrud(user, key, action, value)

type ProjectCrud = (
  project: ProjectsType,
  key: "budgets",
  action: CrudKeyNames,
  value: BudgetType
) => ProjectsType
  
export const generateProjectCrud:ProjectCrud = (project, key, action, value) => generateCrud(project, key, action, value)