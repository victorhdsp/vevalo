'use client';

import css from "./style.module.scss"

import { useUser } from "@/store/User";

import { ProjectsTypes } from "@/assets/data/type";

import Card from "@/components/Card";
import ScrollArea from "@/components/ScrollArea"
import OngoingProject from "@/components/Item/OngoingProject";
import ArchivedProject from "@/components/Item/ArchivedProject";

import Input from "@/components/Input";
import { Search } from "lucide-react";
import { useState } from "react";

const History = () => {
  const projects = useUser(store => store.projects)
  const ongoingProjects: ProjectsTypes[] = projects.filter(project => project.status !== 'archived')
  // const archivedProjects: ProjectsTypes[] = projects.filter(project => project.status === 'archived')

  const [archivedProjects, setArchivedProjects] = useState<ProjectsTypes[]>(projects.filter(project => project.status === 'archived'))

  const handleInputSearch = (value: string) => {
    const filter = projects.filter(project => {
      const status = project.status === 'archived' 
      let name = true
      if (project.name && value) {
        name = project.name.toLowerCase().includes(value.toLowerCase())
      }
      return status && name
    })

    setArchivedProjects(filter)
  }

  return (
    <Card orientation="vertical">
      <div id={css["history"]}>
        <div className={css["ongoing_projects"]}>
          <h2>Projetos em andamento</h2>
          <ScrollArea className={css["content"]}>
            {
              ongoingProjects &&
              ongoingProjects.map(project => (
                <OngoingProject key={project.id} project={project} />
              ))
            }
          </ScrollArea>
        </div>
        <div className={css["archived_projects"]}>
          <h2>Projetos arquivados</h2>
          <ScrollArea className={css["content"]}>
            <Input 
              name="search"
              placeholder="Pesquisar" 
              icon={Search}  
              onInput={handleInputSearch}
            />
            {
              archivedProjects &&
              archivedProjects.map(project => (
                <ArchivedProject key={project.id} project={project} />
              ))
            }
          </ScrollArea>
        </div>
      </div>
    </Card>
  );
}

export default History;