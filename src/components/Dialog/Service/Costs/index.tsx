import css from './style.module.scss'

import { Plus, Trash } from 'lucide-react'

import { useCurrentService } from '@/store/currentService'

import ScrollArea from '@/components/ScrollArea'
import Button from '@/components/Button/Default'
import Input from '@/components/Form/Input'

const Costs = () => {
  const [costs, createNewCost, removeCost, updateCost] = 
      useCurrentService((store) => ([store.service.costs, store.createNewCost, store.removeCost, store.updateCost]))

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
                  onInput={(event) => updateCost(cost.id, "name", event.currentTarget.value)}
                />
                <Input 
                  name={`${cost.id}_value`} 
                  isMoney 
                  isPercent 
                  type='number' 
                  value={cost.value || 0} 
                  onInput={(event) => updateCost(cost.id, "value", event.currentTarget.value)}
                />
                <Button 
                  icon={Trash} 
                  variant='danger' 
                  onClick={() => removeCost(cost.id)} 
                />
              </div>
            ))
          }
          <Button icon={Plus} variant='outline' onClick={createNewCost}>
            Novo campo
          </Button>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Costs