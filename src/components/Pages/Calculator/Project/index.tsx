'use client';

import css from "./style.module.scss";

import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import ScrollArea from "@/components/ScrollArea";
import ItemNew from "@/components/Item/New"
// import FormBudget from "@/components/Form/Budget"
import BudgetView from "../View"

import { useCurrentProject } from "@/store/currentProject";
import { newProject } from "../actions";

const Project = () => {
  const currentProject = useCurrentProject(store => store)

  return (
    <Card className="h-full" orientation="vertical">
      <h2>Novo projeto</h2>

      <div className={css["data"]}>

        <div className={css["inputs"]}>
          <div className={css["content"]}>
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

          <div className={css["budgets"]}>
            <h3>Orçamentos</h3>
            <ScrollArea className={css["content"]}>
              {
                currentProject.budgets &&
                currentProject.budgets.reverse().map((budget) => (
                  <BudgetView key={budget.id} name={budget.service.name} value={budget.result?.total+''} />
                ))
              }
              <ItemNew title='Orçamento'>
                {/* <FormBudget /> */}div
              </ItemNew>
            </ScrollArea>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Project;