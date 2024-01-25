'use strict'

import css from './style.module.scss'

import { Printer } from "lucide-react"

import Button from "@/components/Button/Default"
import DialogHistoryNote from '@/components/Dialog/HistoryNote'
import HistoryView from '..'

import { ProjectsType } from '@/assets/data/type'

interface Props {
  project: ProjectsType
}

const HistoryArchivedView = ({project, ...props}: Props) => {
  return (
    <HistoryView project={project}>
      <DialogHistoryNote 
        title={project.name} 
        project={project}
      >
        <Button icon={Printer}> Ver nota </Button>
      </DialogHistoryNote>
    </HistoryView>
  )
}

export default HistoryArchivedView