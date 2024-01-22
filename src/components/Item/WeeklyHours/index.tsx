import css from './style.module.scss'

import { useEffect, useState } from 'react'

import Label from '@/components/Form/Label'
import DayHours from './DayHours'

import { useUser } from '@/store/User'
import { WeeklyHourType } from '@/assets/data/type'

interface Props {
  onChange?: (days: WeeklyHourType[]) => void
}

const WeeklyHours = (props: Props) => {
  const [profile] = useUser((store) => ([store.user.profile]))

  const [days, setDays] = useState(profile.fiscal.weekly_hours)

  const handleDayInput = (key: string, value: string) => {
    const newDays = days.map((day) => day.name === key ? { ...day, value } : day)
    setDays(newDays)

    props.onChange && props.onChange(newDays)
  }

  return (
    <div className={css["root"]}>
      <Label required>Dias da semana</Label>
      <div className={css["weekly_hours"]}>
        {
          days.map((day) => (
            <DayHours
              key={day.name}
              name={day.name}
              label={day.label}
              value={day.value}
              onInput={(event) => handleDayInput(day.name, event.currentTarget.value)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default WeeklyHours