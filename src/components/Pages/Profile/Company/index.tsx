import css from './style.module.scss'

import { Save } from 'lucide-react'

import { useEffect, useState } from 'react'

import Card from "@/components/Card"
import Input from '@/components/Form/Input'
import Button from '@/components/Button/Default'
import Avatar from '@/components/Avatar'
import Select from '@/components/Form/Select/Default'
import WeeklyHours from '@/components/Item/WeeklyHours'

import { useUser } from '@/store/User'
import { useSegment } from '@/store/segments'

import { useTaxRegime } from '@/store/taxRegime'
import { WeeklyHourType } from '@/assets/data/type'

interface Props {
  onSave?: () => void
}

const Profile = (props: Props) => {
  const [profile, updateProfile] = useUser((store) => ([store.user.profile, store.updateProfile]))
  const segments = useSegment(store => store.segments)
  const taxRegimes = useTaxRegime(store => store.taxRegimes)

  const [segment, setSegment] = useState(profile.company.segment || (segments.length ? segments[0].value : ''))
  const [taxRegime, setTaxRegime] = useState(profile.company.tax_regime ||  (taxRegimes.length > 0 ? taxRegimes[0].value : ''))
  
  const selectTheFollow = (value:string) => {
    setSegment(value)
    updateProfile('segment', value)
  }
  const selectTheTaxRegime = (value:string) => {
    setTaxRegime(value)
    updateProfile('tax_regime', value)
  }
  const selectTheWeeklyHours = (days: WeeklyHourType[]) => {
    updateProfile("weekly_hours", days)
  }

  useEffect(() => {
    updateProfile('segment', segment)
    updateProfile('tax_regime', taxRegime)
  }, [])

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSave && props.onSave()
  }

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Perfil</h2>

      <form onSubmit={handleSubmit} className={css["form"]}>
        <div className={css["branding"]}>
          <h3>Perfil</h3>
          <div className={css["userlogo"]}>
            <Avatar />
          </div>
          <Input 
            name="name" 
            label="Nome" 
            required
            value={profile.company.name}
            onInput={(event) => updateProfile('name', event.currentTarget.value)}
          />
          <Select 
            label='Segmento' 
            name='segment' 
            options={segments} 
            defaultValue={segment} 
            onValueChange={selectTheFollow} 
          />
        </div>

        <div className={css["finance"]}>
          <h3>Financeiro</h3>
          <Input 
            name="administrative_expenses" 
            label="Despesas fixas" 
            className={css['administrative_expenses']}
            required
            isMoney
            value={profile.fiscal.administrative_expenses}
            onInput={(event) => updateProfile('administrative_expenses', event.currentTarget.value)}
          />
          <Select 
            label='Regime tributário' 
            name='tax_regime' 
            options={taxRegimes} 
            defaultValue={taxRegime} 
            onValueChange={selectTheTaxRegime} 
          />
        </div>
        <div className={css["weekly"]}>
          <WeeklyHours onChange={selectTheWeeklyHours} />
        </div>

       <div className={css["footer"]}>

        <Button icon={Save} type="submit">
          Salvar perfil
        </Button>
       </div>
      </form>
    </Card>
  )
}

export default Profile