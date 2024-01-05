'use strict'

import css from './style.module.scss'

import { ProjectsTypes } from "@/assets/data/type"
import { Search } from "lucide-react"

import Card from "@/components/Card"
import Button from "@/components/Button/Default"
import ProjectView from '@/components/Item/ProjectView'

import { makeFinance } from "@/assets/utils/number"

interface Props {
  project: ProjectsTypes
}

const OngoingProject = ({project}: Props) => {
  const workedHours = project.budgets.map(budget => budget.worked_hours).reduce((acc, cur) => acc + cur)
  const total = project.budgets.map(budget => budget.result?.total || 0).reduce((acc, cur) => acc + cur)
 
  return (
    <Card orientation="vertical" className={css["project"]}>
      <div className={css["header"]}>
        <h3>{ project.name }</h3>
        <span data-status={project.status}>{ project.status }</span>
      </div>
      <div className={css["body"]}>
        <p>Horas trabalhadas: { workedHours }</p>
        <p>Imposto: { project.impost }</p>
        <p>Desconto: { project.discount }</p>
      </div>
      <div className={css["footer"]}>
        <p className="total">{ makeFinance(total) }</p>
        <ProjectView project={project}>
          <Button icon={Search}>Visualizar</Button>
        </ProjectView>
      </div>
    </Card>
  )
}

export default OngoingProject