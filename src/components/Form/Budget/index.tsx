import css from './style.module.scss'

import { useEffect, useState } from 'react';

import Input from '@/components/Input';
import Select from '@/components/Select/Default';
import Label from '@/components/Label';
import Button from '@/components/Button/Default';
import ScrollArea from '@/components/ScrollArea';

import { BudgetTypes } from '@/assets/data/type';

import { useCurrentProject } from '@/store/currentProject';
import { useCurrentBudget } from '@/store/currentBudget';
import { calculeBudget } from '@/assets/utils/number';

import { useUser } from '@/store/User';

const Budget = () => {
  const fiscal = useUser(store => store.profile.fiscal)
  const services = useUser(store => store.services)
  
  const servicesForSelect = services.map(service => ({ value: service.id, label: service.name }))
  const defaultServicesForSelectValue = servicesForSelect.length > 0 ? servicesForSelect[0].value : '' 
  
  const { selectService, changeCostValue, ...currentBudget } = useCurrentBudget(store => store)

  const [discount, setDiscount] = useState(currentBudget.discount)
  const [workedHours, setWorkedHours] = useState(`${currentBudget.worked_hours}` || '0')
  const [marginProfit, setMarginProfit] = useState(currentBudget.profit_margin)

  const [createNewBudget] = useCurrentProject((store) => ([store.createNewBudget]))

  
  const handleClickToCallSetNewBudget = () => {
    const budget:BudgetTypes = {
      id: currentBudget.id,
      service: currentBudget.service,
      costs: currentBudget.costs,
      discount: discount,
      worked_hours: parseFloat(workedHours) || 0,
      profit_margin: marginProfit,
    }

    const result = calculeBudget(
      fiscal.administrative_expenses,
      fiscal.weekly_hours,
      [fiscal.worker],
      budget.costs,
      budget.discount,
      budget.profit_margin,
      budget.worked_hours
    )

    budget.result = result
    
    createNewBudget(budget)

    currentBudget.reset()
    
    const closeButton: HTMLButtonElement | null = document.querySelector('[data-close]')
    closeButton?.click()
  }

  const selectTheService = (selectedValueId: string) => {
    const selectedService = services.find(({ id }) => id === selectedValueId)
    if (selectedService) selectService(selectedService)
  }

  useEffect(() => selectTheService(defaultServicesForSelectValue), [])

  return (
    <form className={css["budgetForm"]}>
      <div className={css["content"]}>

        <div className={css["service_and_worked"]}>
          <Select 
            label='Serviço' 
            name='service' 
            options={servicesForSelect} 
            defaultValue={defaultServicesForSelectValue} 
            onValueChange={selectTheService} 
          />

          <Input 
            type='number' 
            name='workedHours' 
            label='Horas trabalhadas' 
            required
            onInput={(value) => setWorkedHours(value)}
          />
        </div>

        <div className={css["discount_and_margin"]}>
          <Input 
            type='number' 
            name='discount' 
            label='Desconto' 
            isMoney 
            isPercent
            defaultValue={discount}
            onInput={(value) => setDiscount(value)}
          />

          <Input 
            type='number' 
            name='margin_profit' 
            label='Margem de lucro' 
            required
            isMoney 
            isPercent
            defaultValue={marginProfit}
            onInput={(value) => setMarginProfit(value)}
          />
        </div>

        <div className={css["service_costs"]}>
          <div className={css["header"]}>
            <Label 
              help='Aqui estão listados todos os custos que 
                    são necessarios para criar esse orçamento'
            >
              Custos de produção
            </Label>
          </div>
          <ScrollArea className={css["body"]}>
            {
              currentBudget.costs
                ?.map(({id, name, value}) =>
                  <Input 
                    key={id}
                    type="number"
                    name={id}
                    label={name}
                    isMoney
                    isPercent
                    defaultValue={`${value}`}
                    onInput={(value) => changeCostValue(id, value)}
                  />
              )
            }
          </ScrollArea>
        </div>

        <Button type='button' onClick={handleClickToCallSetNewBudget}>
          Salvar
        </Button>
      </div>
    </form>
  )
}

export default Budget;