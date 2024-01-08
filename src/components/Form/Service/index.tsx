import css from './style.module.scss'

import Input from "@/components/Input";
import Button from '@/components/Button/Default';
import FormCost from '@/components/Form/Cost'

import { Plus, Save } from "lucide-react";
import { useCurrentService } from '@/store/currentService';
import { CostsTypes, ServiceTypes } from '@/assets/data/type';
import { useUser } from '@/store/User';
import { useState } from 'react';

const Service = () => {
  const currentService = useCurrentService(store => store)
  const createNewService = useUser(store => store.createNewService)

  const [name, setName] = useState(currentService.name)
  const [profitMargin, setProfitMargin] = useState(currentService.profit_margin)

  const costs: { [key: string]: CostsTypes } = {}
  currentService.costs.forEach(cost => costs[cost.id] = cost)

  const changeCostItem = (id:string, name:'name'|'value', value: string) => {
    costs[id][name] = value
  }

  const handleClickToCallSetNewService = () => {
    const service: ServiceTypes = {
      id: currentService.id,
      name,
      profit_margin: profitMargin.replace('%%', '%'),
      costs: Object.values(costs)
    }

    createNewService(service)
    const closeButton: HTMLButtonElement | null = document.querySelector('[data-close]')
    closeButton?.click()
    currentService.reset()
  }
  
  return (
    <form className={css["formService"]}>
      <div className={css["header"]}>
        <Input 
          name="name" 
          label="Nome"
          defaultValue={name}
          onInput={setName}
        />
        <Input 
          name="profit_margin" 
          label="Margem de lucro" 
          defaultValue={currentService.profit_margin}
          isMoney 
          isPercent 
          onInput={setProfitMargin}
        />
      </div>
      <div className={css["content"]}>
        <h3>Custos de produção</h3>
        {
          currentService.costs.map(cost => (
            <FormCost key={cost.id} cost={cost} onChange={changeCostItem} />
          ))
        }
        <Button variant='outline' icon={Plus} onClick={currentService.createNewCost} >
          Adicionar custo
        </Button>
      </div>

      <Button variant='secondary' icon={Save} onClick={handleClickToCallSetNewService}>
        Salvar serviço
      </Button>
    </form>
  )
}

export default Service;