import css from './style.module.scss'

import { useToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';
import { Save, User } from 'lucide-react';

import  Dialog, { ExternCloseDialog } from '../index';

import Data from './Data';
import Costs from './Costs';
import Button from "@/components/Button/Default"

import { BudgetType } from '@/assets/data/type';
import { useCurrentProject } from '@/store/currentProject';
import { useCurrentBudget } from '@/store/currentBudget';

import { generateId } from '@/assets/utils';
import { calculeBudget, calculeWeeklyHours } from '@/assets/utils/number';
import { useUser } from '@/store/User';

interface Props {
  title: string;
  children: React.ReactNode;
  hasEdit?: boolean
}

const DialogBudget = ({hasEdit, ...props}: Props) => {
  
  const toast = useToast()
  const [workers, fiscal] = useUser(store => [store.user.workers, store.user.profile.fiscal])
  const updateBudgets = useCurrentProject((store) => (store.updateBudgets))
  const [currentBudget] = useCurrentBudget(store => [store.budget, store.reset])

  const handleSaveBudget = () => {
    if(!currentBudget.worked_hours) toast({ title: "As horas estimadas não pode estar vazias", status: "error" })
    else if(!currentBudget.profit_margin) toast({ title: "Margem de lucro não pode ser vazio", status: "error" })
  
    else {
      const result = calculeBudget(
        fiscal.administrative_expenses,
        calculeWeeklyHours(fiscal.weekly_hours),
        [...workers],
        currentBudget.costs,
        currentBudget.discount,
        currentBudget.profit_margin,
        currentBudget.worked_hours
      )

      const newBudget:BudgetType = {
        ...currentBudget,
        id: currentBudget ? currentBudget.id : generateId(),
        result,
      }
  
      if (hasEdit) {
        updateBudgets('update', newBudget)
      } else {
        updateBudgets('add', newBudget)
      }
  
      console.log(newBudget)
      ExternCloseDialog()
      toast({ title: 'Orçamento salvo com sucesso', status: 'success' })
    }
  }

  return (
    <Dialog
      title={props.title}
      trigger={props.children}
    >
      <div className={css["body"]}>
        <Data />
        <Costs />
      </div>

      <div className={css["footer"]}>
        <Button icon={Save} onClick={handleSaveBudget}>
          Salvar orçamento
        </Button>
      </div>
    </Dialog>
  )
}

export default DialogBudget