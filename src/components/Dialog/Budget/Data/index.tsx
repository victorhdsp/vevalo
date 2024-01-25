import css from './style.module.scss'

import { useEffect, useState } from 'react'

import Input from '@/components/Form/Input'
import Select from '@/components/Form/Select/Default'

import { useCurrentBudget } from '@/store/currentBudget'
import { useUser } from '@/store/User'
import SelectHoursOrDays from './SelectHoursOrDays'

const NewService = () => {
  const [userServices] = useUser(store => [store.user.services])
  const [profit_margin, updateBudget] = useCurrentBudget(store => [store.budget.profit_margin, store.updateBudget])

  const services = userServices.map(service => ({ label: service.name, value: service.id }))
  const [service, setService] =  useState(services[0]?.value || '')

  const selectTheFollow = (value:string) => setService(value)

  useEffect(() => {
    const currentService = userServices.find(s => s.id === service)
    if (currentService) updateBudget("service", currentService)
  }, [service])

  useEffect(() => {
    const currentService = userServices.find(s => s.id === service)
    if (currentService) updateBudget("service", currentService)
  }, [])
  
  return (
    <div className={css["root"]}>
      <div className={css["new-service"]}>
        <Select 
          label='Seus serviços' 
          name='service' 
          options={services} 
          defaultValue={service} 
          onValueChange={selectTheFollow} 
        />
        <Input 
          name="profit_margin" 
          label="Margem de lucro" 
          required
          value={profit_margin}
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