import css from './style.module.scss'

import { useToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';
import { Banknote, Clock, Landmark, PercentCircle, User } from 'lucide-react';

import  Dialog, { ExternCloseDialog } from '../index';

import { ProjectsType } from '@/assets/data/type';
import { calculeProject, makeFinance } from '@/assets/utils/number';

interface Props {
  title: string;
  children: React.ReactNode;
  project: ProjectsType
}

const DialogHistoryNote = ({project, ...props}: Props) => {
  const workedHours = project.budgets.map(budget => budget.worked_hours).reduce((acc, cur) => acc + cur)
  // const total = project.budgets.map(budget => budget.result?.total || 0).reduce((acc, cur) => acc + cur)
  const total = calculeProject(project.budgets, project.impost, project.discount)
  const received = project.budgets.map(budget => budget.result?.received || 0).reduce((acc, cur) => acc + cur)
  const salaries = project.budgets.map(budget => budget.result?.cost.salary || 0).reduce((acc, cur) => acc + cur)

  const status = () => {
    if (project.status === 'archived') return 'Arquivado'
    if (project.status === 'recused') return 'Recusado'
    if (project.status === 'ongoing') return 'Em andamento'
  }

  return (
    <Dialog
      title={props.title}
      trigger={props.children}
      className={css["root"]}
    >
      <div className={css["body"]}>
        <div className="description">
          <p><b>Descrição:</b></p>
          <p>
            Nesse projeto {
              project.budgets.length > 1 ? 
              `foram entregues ${project.budgets.length} serviços` : 
              `foi entregue ${project.budgets.length} serviço`
            } serviços, onde o lucro da empresa foi de {makeFinance(received)} e 
            o valor pago aos colaboradores foram {makeFinance(salaries)} 
          </p>
        </div>
        
        <div className={css["budgets"]}>
          <p><b>Orçamentos:</b></p>

          <div className={css["content"]}>
            {project.budgets.map(budget => (
              <div key={budget.id} className={css["budget"]}>
                <h3>{budget.service.name}</h3>
                <p>Produção: {makeFinance(budget.result?.cost.total||'0')}</p>
                <p>Lucro: {makeFinance(budget.result?.received||'0')}</p>
                <p>Horas trabalhadas: {budget.worked_hours} horas</p>
                <p>Total: {makeFinance(budget.result?.total||'0')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={css["information"]}>
          <div className={css["expenses"]}>
            <span className={css["icon"]} ><Landmark size={32} /></span>
            <p>Despesas totais na época</p>
            <p><b>{ makeFinance(project.expenses) }</b></p>
          </div>

          <div className={css["impost"]}>
            <span className={css["icon"]} ><PercentCircle size={32} /></span>
            <p>Imposto que você pagou</p>
            <p><b>{ makeFinance(project.impost) }</b></p>
          </div>
          
          <div className={css["discount"]}>
            <span className={css["icon"]} ><Banknote size={32} /></span>
            <p>Desconto total entregue</p>
            <p><b>{ makeFinance(project.discount) }</b></p>
          </div>

          <div className={css["worked_hours"]}>
            <span className={css["icon"]} ><Clock size={32} /></span>
            <p>Horas trabalhadas</p>
            <p><b>{ workedHours } Horas</b></p>
          </div>
        </div>
      </div>

      <div className={css["footer"]}>
        <h3>Total: {makeFinance(total)}</h3>
        <p>Status: {status()}</p>
      </div>
    </Dialog>
  )
}

export default DialogHistoryNote