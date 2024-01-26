'use client';

import css from "./style.module.scss";

import { Save, Globe } from "lucide-react";

import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import Button from "@/components/Button/Default";
import Budgets from "./Budgets";

import { useCurrentProject } from "@/store/currentProject";
import { useUser } from "@/store/User";
import { useEffect, useState } from "react";

const Project = () => {
  const [updateProjects, tax_regime] = useUser(store => ([store.updateProjects, store.user.profile.company.tax_regime]))
  const [currentProject, updateProject, reset] = useCurrentProject(store => [store.project, store.updateProject, store.reset])
  const [impost, setImpost] = useState(currentProject.impost)

  const handleSave = () => {
    updateProjects('add', currentProject)
    reset()
  }

  useEffect(() => {
    let impost = currentProject.impost
    if (tax_regime === 'MEI') { impost = "71" }
    if (tax_regime === 'simples') { impost = "6%" }
    if (tax_regime === 'none') { impost = "0" }
    setImpost(impost)
    updateProject('impost', impost)
  }, [])

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
              value={impost}
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