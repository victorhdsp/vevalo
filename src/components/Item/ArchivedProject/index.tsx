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

const ArchivedProject = ({project}: Props) => {
  const total = project.budgets.map(budget => budget.result?.total || 0).reduce((acc, cur) => acc + cur)
 
  return (
    <Card orientation="horizontal" className={css["project"]}>
      <div className={css["content"]}>
        <h3 className={css["name"]}>{ project.name }</h3>
        <p className={css["total"]}>{ makeFinance(total) }</p>
        
        <ProjectView project={project}>
          <Button variant='outline' icon={Search}>Visualizar</Button>
        </ProjectView>
      </div>
    </Card>
  )
}

export default ArchivedProject