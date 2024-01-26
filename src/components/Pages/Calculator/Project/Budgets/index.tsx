import css from './style.module.scss'

import { useState } from 'react'

import BudgetView from "../../View"
import ScrollArea from '@/components/ScrollArea'
import ButtonNew from '@/components/Button/New'
import DialogBudget from '@/components/Dialog/Budget'
import ItemNew from "@/components/Item/New"

import { makeFinance } from '@/assets/utils/number'
import { BudgetType } from '@/assets/data/type'
import { useCurrentProject } from '@/store/currentProject'
import { useCurrentBudget } from '@/store/currentBudget'

const Budgets = () => {
  const [budgets, updateBudgets] = useCurrentProject((store) => ([store.project.budgets, store.updateBudgets]))
  const [setBudget, reset] = useCurrentBudget(store => [store.setBudget, store.reset])

  const handleEditBudget = (budget: BudgetType) => {
    setBudget(budget)
    document.getElementById('edit-budget')?.click()
  }

  const handleNewBudget = () => {
    reset()
  }

  return (
    <div className={css["root"]}>
      <div className={css["budgets"]}>
        <h3>Orçamentos</h3>

        <ScrollArea className={css["content"]}>
          {
            budgets && 
            budgets
              .sort((a, b) => (a.service.name > b.service.name ? 1 : -1))
              .map((budget, index) => (
                <BudgetView 
                  key={index} 
                  name={budget.service?.name || ''} 
                  value={makeFinance(budget.result?.total || 0)} 
                  onClickInEdit={() => handleEditBudget(budget)}
                  onClickInDelete={() => {updateBudgets("remove", budget)}}
                />
              ))
          }
        </ScrollArea>
      </div>

      <div className={css["footer"]}>
        <DialogBudget title="Editar colaborador" hasEdit>
          <div id='edit-budget' ></div>
        </DialogBudget>
        
        <DialogBudget title="Novo orçamento">
            <ButtonNew onClick={handleNewBudget} />
        </DialogBudget>
      </div>
    </div>
  )
}

export default Budgets