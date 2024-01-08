'use client';

import css from "./style.module.scss";

import { FormEvent, useEffect, useState } from "react";

import Card from "@/components/Card";
import Input from "@/components/Input";
import ScrollArea from "@/components/ScrollArea";
import ItemNew from "@/components/Item/New"
import FormBudget from "@/components/Form/Budget"
import Button from "@/components/Button/Default";
import ItemBudget from "@/components/Item/Budget"

import { Printer } from "lucide-react";

import { ProjectsTypes } from "@/assets/data/type";
import { generateId } from "@/assets/utils";

import { useUser } from "@/store/User";
import { useCurrentProject } from "@/store/currentProject";
import { newProject } from "./actions";

const NewProject = () => {
  const [createNewProject, profile, uid] = useUser(store => ([store.createNewProject, store.profile, store.id]))
  const currentProject = useCurrentProject(store => store)
  const fiscal = profile.fiscal
  
  const [costumerName, setCostumerName] = useState(currentProject.name || '')
  const [discount, setDiscount] = useState(`${currentProject.discount}`)
  const [impost, setImpost] = useState(`${currentProject.impost}`)

  const administrative_expenses = parseFloat(fiscal.administrative_expenses)
  const salary = parseFloat(fiscal.worker.salary)
  const expenses = `${administrative_expenses + salary}`

  const reset = () => {
    setCostumerName(currentProject.name)
    setDiscount(currentProject.discount)
    setImpost(currentProject.impost)
    currentProject.reset()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const project: ProjectsTypes = {
      id: generateId(),
      name: costumerName,
      status: 'ongoing',
      discount: discount,
      impost: impost,
      budgets: currentProject.budgets,
      expenses: expenses
    }

    createNewProject(project)
    newProject(uid)
    reset()
  }

  return (
    <Card className="h-full" orientation="vertical">
      <h2>Novo projeto</h2>

      <form onSubmit={handleSubmit} className={css["data"]}>

        <div className={css["inputs"]}>
          <h3>Dados:</h3>

          <div className={css["content"]}>
            <Input 
              name="name" 
              label="Nome do cliente" 
              required
              value={costumerName}
              onInput={(value) => setCostumerName(value)}
              />
            <Input 
              type="number" 
              name="expenses" 
              label="Despesas" 
              help="Junção dos custos administrativos com seu salário" 
              disabled 
              isMoney 
              isPercent
              value={expenses}
              />
            <Input 
              type="number" 
              name="discount" 
              label="Desconto" 
              isMoney 
              isPercent
              value={discount}
              onInput={(value) => setDiscount(value)}
              />
            <Input 
              type="number" 
              name="impost" 
              label="Imposto" 
              required 
              isMoney 
              isPercent
              value={impost}
              onInput={(value) => setImpost(value)}
            />
          </div>

          <div className={css["budgets"]}>
            <h3>Orçamentos</h3>
            <ScrollArea className={css["content"]}>
              <ItemNew title='Orçamento'>
                <FormBudget />
              </ItemNew>
              {
                currentProject.budgets &&
                currentProject.budgets.reverse().map((budget) => (
                  <ItemBudget key={budget.id} item={budget} />
                ))
              }
            </ScrollArea>
          </div>
        </div>

        <Button icon={Printer} type="submit" variant="secondary">
          Gerar nota
        </Button>
      </form>
    </Card>
  );
}

export default NewProject;