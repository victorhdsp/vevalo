import css from './style.module.scss'

import { useEffect, useState } from 'react'

import Input from '@/components/Form/Input'
import Select from '@/components/Form/Select/Default'

import { useCurrentBudget } from '@/store/currentBudget'
import { useUser } from '@/store/User'
import SelectHoursOrDays from './SelectHoursOrDays'

const NewService = () => {
  const [userServices] = useUser(store => [store.user.services])
  const [currentProfitMargin, updateBudget, currentServiceId] = useCurrentBudget(store => [store.budget.profit_margin, store.updateBudget, store.budget.service.id])
  const [profitMargin, setProfitMargin] =  useState(currentProfitMargin)

  const services = userServices.map(service => ({ label: service.name, value: service.id }))
  const [serviceId, setServiceId] =  useState(currentServiceId)

  const selectTheService = (value:string) => setServiceId(value)

  useEffect(() => {
    const currentService = userServices.find(s => s.id === serviceId)
    if (currentService) { 
      updateBudget("service", currentService) 
    }
    setProfitMargin(currentService?.profit_margin || profitMargin)
  }, [serviceId])

  
  
  return (
    <div className={css["root"]}>
      <div className={css["new-service"]}>
        <Select 
          label='Seus serviços' 
          name='service' 
          options={services} 
          value={serviceId} 
          onValueChange={selectTheService} 
        />
        <Input 
          name="profit_margin" 
          label="Margem de lucro" 
          required
          value={profitMargin}
          isMoney
          isPercent
          onInput={(event) => updateBudget("profit_margin", event.currentTarget.value)}
        />
        <SelectHoursOrDays />
      </div>
    </div>
  )
}

export default NewService