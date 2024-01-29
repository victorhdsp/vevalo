'use client';

import css from "./style.module.scss";

import { Save, Globe } from "lucide-react";
import * as Accordion from '@radix-ui/react-accordion';

import Card from "@/components/Card";
import { useCurrentProject } from "@/store/currentProject";
import { calculeProject, makeFinance } from "@/assets/utils/number";

const Resume = () => {
  const [project, impost, discount] = useCurrentProject(store => [store.project, store.project.impost, store.project.discount])
  
  const workedHours = project.budgets.length > 0 ? 
      project.budgets.map(budget => budget.worked_hours || 0).reduce((acc, cur) => acc + cur) :
      0
  const { totalReceived, totalImpost, totalDiscount } = calculeProject(project.budgets, impost, discount)

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Resumo do projeto</h2>

      <div className={css["resume"]}>
        <div className={css["budgets"]}>
          <h3>Orçamentos:</h3>
          <Accordion.Root type="single" collapsible>
            {
              project.budgets.map(budget => (
                <Accordion.Item key={budget.id} value={budget.id} className={css["budget"]}>
                  <Accordion.Trigger className={css["trigger"]}>
                    {budget.service.name}
                  </Accordion.Trigger>
                  <Accordion.Content className={css["content"]}>
                    <p>Produção: {budget.result?.cost.total}</p>
                    <p>Lucro: {budget.result?.received}</p>
                    <p>Horas trabalhadas: {budget.worked_hours} horas</p>
                    <p>Total: {budget.result?.total}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))
            }
          </Accordion.Root>
        </div>

        <div className={css["information"]}>
          <div className={css["impost"]}>
            <p><b>Imposto:</b></p>
            <p>{ makeFinance(totalImpost) }</p>
          </div>
          
          <div className={css["discount"]}>
            <p><b>Desconto:</b></p>
            <p>{ makeFinance(totalDiscount) }</p>
          </div>

          <div className={css["worked_hours"]}>
            <p><b>Horas trabalhadas:</b></p>
            <p>{ workedHours } Horas</p>
          </div>

          <div className={css["worked_hours"]}>
            <p><b>Total:</b></p>
            <p>{ makeFinance(totalReceived) }</p>
          </div>
        </div>
      </div>

      <div className={css["footer"]}>
        {/* <Button icon={Globe}>
          Proposta comercial
        </Button> */}

        {/* <Button icon={Save} variant="outline">
          Salvar
        </Button> */}
      </div>
    </Card>
  );
}

export default Resume;