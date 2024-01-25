import css from './style.module.scss'

import { Plus, Trash } from 'lucide-react'

import { useCurrentBudget } from '@/store/currentBudget'

import ScrollArea from '@/components/ScrollArea'
import Input from '@/components/Form/Input'
import { useUser } from '@/store/User'

const Costs = () => {
  const budget = useCurrentBudget(store => store.budget)
  const [costs, updateCost] = useCurrentBudget(store => [store.budget.costs, store.changeCostValue])

  return (
    <div className={css["root"]}>
      <h3>Custos de produção</h3>

      <div className={css["costs"]}>
        <ScrollArea className={css["content"]}>
          {
            costs &&
            costs.map((cost) => (
              <div className={css["cost-item"]} key={cost.id}>
                <Input 
                  name={`${cost.id}_name`} 
                  placeholder="Nome" 
                  value={cost.name} 
                  disabled
                />
                <Input 
                  name={`${cost.id}_value`} 
                  isMoney 
                  isPercent 
                  type='number' 
                  value={cost.value || 0} 
                  onInput={(event) => updateCost("value", event.currentTarget.value)}
                />
              </div>
            ))
          }
        </ScrollArea>
      </div>
    </div>
  )
}

export default Costs