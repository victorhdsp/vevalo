'use strict'

import css from './style.module.scss'

import { Globe, Printer, Save } from "lucide-react"

import Card from "@/components/Card"
import Button from "@/components/Button/Default"
import HistoryView from '..'
import DialogHistoryNote from '@/components/Dialog/HistoryNote'

import { ProjectsType } from '@/assets/data/type'
import { useUser } from '@/store/User'

interface Props {
  project: ProjectsType,
}

const HistoryArchivedView = ({project, ...props}: Props) => {
  const updateProjects = useUser(store => store.updateProjects)

  const handleSave = () => {
    const newProject = project
    newProject.status = 'archived'
    updateProjects('update', newProject)
  }

  return (
    <HistoryView project={project}>
      <Button icon={Save} onClick={handleSave}> Finalizar </Button>
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