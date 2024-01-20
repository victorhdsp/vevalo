import css from './style.module.scss'

import { Plus, Save, Trash } from 'lucide-react'

import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

import { useCurrentService } from '@/store/currentService'

import Card from "@/components/Card"
import ScrollArea from '@/components/ScrollArea'
import Button from '@/components/Button/Default'
import Input from '@/components/Form/Input'

interface Props {
  onClick: () => void
}

const Costs = (props:Props) => {
  const [costs, createNewCost, removeCost, updateCost] = 
      useCurrentService((store) => ([store.service.costs, store.createNewCost, store.removeCost, store.updateCost]))

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Custos de produção</h2>

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

      <div className={css["footer"]}>
        <Button icon={Save} onClick={props.onClick}>Salvar serviço</Button>
      </div>
    </Card>
  )
}

export default Costs