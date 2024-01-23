'use strict'

import css from './style.module.scss'

import { Globe, Printer } from "lucide-react"

import Card from "@/components/Card"
import Button from "@/components/Button/Default"

import { makeFinance } from "@/assets/utils/number"
import { ProjectsType } from '@/assets/data/type'
import { useUser } from '@/store/User'
import DialogHistoryNote from '@/components/Dialog/HistoryNote'

interface Props {
  project: ProjectsType,
  onClickInEdit?: () => void;
  onClickInDelete?: () => void;
}

const HistoryArchivedView = ({project, ...props}: Props) => {
  const updateProjects = useUser(store => store.updateProjects)
  const workedHours = project.budgets.map(budget => budget.worked_hours).reduce((acc, cur) => acc + cur)
  const total = project.budgets.map(budget => budget.result?.total || 0).reduce((acc, cur) => acc + cur)

  const status = () => {
    if (project.status === 'archived') return 'Arquivado'
    if (project.status === 'recused') return 'Recusado'
    if (project.status === 'ongoing') return 'Em andamento'
  }

  const handleSave = () => {
  }

  return (
    <div className={css["root"]}>
      <Card orientation="horizontal" className={css["calculator-view"]}>
        <div className={css["content"]}>
          <h3 className={css["name"]}>{ project.name }</h3>
          <p className={css["impost"]}>Imposto: { makeFinance(project.impost) }</p>
          <p className={css["worked_hours"]}>Horas trabalhadas: { workedHours }</p>
          <p className={css["total"]}>Total: { makeFinance(total) }</p>
        </div>

        <div className={css["footer"]}>
          <p className={css["status"]}>{ status() }</p>
          <DialogHistoryNote 
            title={project.name} 
            project={project}
          >
            <Button icon={Printer}> Ver nota </Button>
          </DialogHistoryNote>
          {/* <Button icon={Globe}> Ver proposta </Button> */}
        </div>
      </Card>
    </div>
  )
}

export default HistoryArchivedView