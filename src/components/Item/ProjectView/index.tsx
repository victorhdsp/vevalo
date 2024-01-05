import css from './style.module.scss'

import { X } from 'lucide-react'

import React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import Card from "@/components/Card"
import ScrollArea from "@/components/ScrollArea"
import ItemBudget from "@/components/Item/Budget"

import { ProjectsTypes, Status } from '@/assets/data/type'
import { makeFinance } from '@/assets/utils/number'

interface Props {
  children: React.ReactNode
  project: ProjectsTypes
}

const ProjectView = ({children, project}: Props) => {
  const workedHours = project.budgets.map(budget => budget.worked_hours).reduce((acc, cur) => acc + cur)
  const total = project.budgets.map(budget => budget.result?.total || 0).reduce((acc, cur) => acc + cur)
  const received = project.budgets.map(budget => budget.result?.received || 0).reduce((acc, cur) => acc + cur)
  const salary = project.budgets.map(budget => budget.result?.cost.salary || 0).reduce((acc, cur) => acc + cur)

  const statusMessage = (status: Status) => {
    if (status === 'archived') return 'Projeto arquivado'
    if (status === 'ongoing') return 'Projeto em andamento'
    if (status === 'recused') return 'Projeto foi cancelado'
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        { children }
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={css["dialog-overlay"]} />
        <Dialog.Content className={css["dialog-content"]}>
          <Card orientation='vertical' className='gap-md'>
            <Dialog.Title className={css["dialog-title"]}>
              Visualizando projeto
            </Dialog.Title>
            
            <div className={css["body"]}>
              <div className={css["header"]}>
              </div>
              <div className={css["header"]}>
                <h2>Nome: {project.name}</h2>
                <p>{statusMessage(project.status)}</p>
              </div>

              <div className={css["data"]}>
                <p>Despesas totais na época: <b>{makeFinance(parseFloat(project.expenses))}</b></p>
                <p>Imposto que você pagou: <b>{makeFinance(parseFloat(project.impost))}</b></p>
                <p>O desconto dado foi: <b>{makeFinance(parseFloat(project.discount))}</b></p>
              </div>

              <div className={css["value"]}>
                <p className="text-base">Valor total do projeto foi {<b>{makeFinance(total)}</b>}</p>
                <p>Você trabalhou <b>{workedHours} horas</b> nesse projeto</p>
                <p>Você recebeu: <b>{makeFinance(salary)}</b></p>
                <p>Sua empresa recebeu: <b>{makeFinance(received)}</b></p>
              </div>

              <div className={css["budgets"]}>
                <h3>Orçamentos</h3>
                <ScrollArea className={css["content"]}>
                  {
                    project.budgets &&
                    project.budgets.reverse().map((budget) => (
                      <ItemBudget key={budget.id} item={budget} hiddenFooter />
                      ))
                    }
                </ScrollArea>
              </div>
            </div>
            
            <Dialog.Close asChild>
              <button data-close>
                <X className='absolute top-[15px] right-[15px] cursor-pointer' size={18} />
              </button>
            </Dialog.Close>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ProjectView