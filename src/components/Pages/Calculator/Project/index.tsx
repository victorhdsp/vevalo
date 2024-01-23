'use client';

import css from "./style.module.scss";

import { Save, Globe } from "lucide-react";

import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import Button from "@/components/Button/Default";
import Budgets from "./Budgets";

import { useCurrentProject } from "@/store/currentProject";
import { makeFinance } from "@/assets/utils/number";
import { useUser } from "@/store/User";

const Project = () => {
  const updateProjects = useUser(store => store.updateProjects)
  const [currentProject, updateProject, reset] = useCurrentProject(store => [store.project, store.updateProject, store.reset])

  const handleSave = () => {
    updateProjects('add', currentProject)
    reset()
  }

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Novo projeto</h2>

      <div className={css["data"]}>

        <div className={css["inputs"]}>
          <div className={css["content"]}>
            <h3>Novo projeto</h3>
            <Input 
              name="name" 
              label="Nome do cliente" 
              required
              value={currentProject.name}
              onInput={(e) => updateProject('name', e.currentTarget.value)}
            />
            <Input 
              type="number" 
              name="discount" 
              label="Desconto" 
              required 
              isMoney 
              isPercent
              value={currentProject.discount}
              onInput={(e) => updateProject('discount', e.currentTarget.value)}
            />
            <Input 
              type="number" 
              name="impost" 
              label="Imposto" 
              required 
              isMoney 
              isPercent
              value={currentProject.impost}
              onInput={(e) => updateProject('impost', e.currentTarget.value)}
            />
          </div>

          <Budgets />

        </div>

        <div className={css["footer"]}>
          <Button icon={Save} variant="outline" onClick={handleSave}>
            Salvar
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Project;