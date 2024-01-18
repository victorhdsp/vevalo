import css from './style.module.scss'

import { useEffect, useState } from 'react'

import Label from '@/components/Form/Label'
import DayHours from './DayHours'

import { useUser } from '@/store/User'

interface Props {
  onChange?: (value: string) => void
}

const WeeklyHours = (props: Props) => {
  const [profile, updateProfile] = useUser((store) => ([store.user.profile, store.updateProfile]))

  const [days, setDays] = useState(profile.fiscal.weekly_hours)

  const handleDayInput = (key: string, value: string) => {
    const newDays = days.map((day) => day.name === key ? { ...day, value } : day)
    setDays(newDays)

    updateProfile("weekly_hours", newDays)
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