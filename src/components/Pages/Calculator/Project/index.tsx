'use client';

import css from "./style.module.scss";

import { Save, Globe } from "lucide-react";

import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import Button from "@/components/Button/Default";
import Budgets from "./Budgets";

import { useCurrentProject } from "@/store/currentProject";
import { makeFinance } from "@/assets/utils/number";
import { newProject } from "../actions";

const Project = () => {
  const currentProject = useCurrentProject(store => store)

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
            />
            <Input 
              type="number" 
              name="impost" 
              label="Imposto" 
              required 
              isMoney 
              isPercent
            />
          </div>

          <Budgets />

        </div>

        <div className={css["footer"]}>
          <Button icon={Save} variant="outline">
            Salvar
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Project;