import css from './style.module.scss'

import { useState } from 'react'

import Input from '@/components/Form/Input'
import BudgetCalendarRange from '@/components/Item/CalendarRange'
import Select from '@/components/Form/Select/Default'

import { useCurrentBudget } from '@/store/currentBudget'

const SelectHOursOrDays = () => {
  const [worked_hours, updateBudget] = useCurrentBudget(store => [store.budget.worked_hours, store.updateBudget])

  const options = [
    { label: 'Horas', value: 'hours' },
    { label: 'Dias', value: 'days' }
  ]

  const [selected, setSelected] = useState(options[0].value)

  const selectTheFollow = (value:string) => {
    setSelected(value)
    updateBudget("worked_hours", '0')
  }

  const selectCalendarRange = (worked_hours:number) => updateBudget("worked_hours", `${worked_hours}`)

  return (
    <div className={css["root"]}>
      <Select 
        label='Horas ou dias' 
        name='hours_or_days' 
        options={options} 
        defaultValue={selected} 
        onValueChange={selectTheFollow} 
      />

      {
        selected === 'hours' ? (
          <Input 
            name="worked_hours" 
            label="Horas estimadas" 
            required
            value={worked_hours}
            type='number'
            onInput={(event) => updateBudget("worked_hours", event.currentTarget.value)}
          />
        ) : (
          <BudgetCalendarRange onChange={selectCalendarRange} />
        )
      }
    </div>
  )
}

export default SelectHOursOrDays