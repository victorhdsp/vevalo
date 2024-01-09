import css from './style.module.scss'

import { Save } from 'lucide-react'

import { FormEvent, useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'

import Card from "@/components/Card"
import Input from '@/components/Input'
import Button from '@/components/Button/Default'
import Avatar from '@/components/Avatar'
import ScrollArea from '@/components/ScrollArea'
import ItemNew from '@/components/Item/New'
import FormService from '@/components/Form/Service'
import ItemService from '@/components/Item/Service'
import Select from '@/components/Select/Default'

import { useUser } from '@/store/User'
import { useSegment } from '@/store/segments'

import { ProfileType } from '@/assets/data/type'
import { useTaxRegime } from '@/store/taxRegime'
import { updateProfile } from './actions'
import { redirect } from 'next/navigation'


const Profile = () => {
  const toast = useToast()
  const user = useUser(({ id, services, profile, saveUserProfile }) => ({ id, services, profile, saveUserProfile }))
  const segments = useSegment(store => store.segments)
  const taxRegimes = useTaxRegime(store => store.taxRegimes)

  const [company, setCompany] = useState(user.profile.name)
  const [segment, setSegment] = useState(user.profile.segment)
  const [taxRegime, setTaxRegime] = useState(user.profile.tax_regime)
  const [administrativeExpenses, setAdministrativeExpenses] = useState(user.profile.fiscal.administrative_expenses)
  const [payment, setPayment] = useState(user.profile.fiscal.worker.salary)
  const [weeklyHours, setweeklyHours] = useState(user.profile.fiscal.weekly_hours)

  useEffect(() => {
    setCompany(user.profile.name)
    setSegment(user.profile.segment)
    setTaxRegime(user.profile.tax_regime)
    setAdministrativeExpenses(user.profile.fiscal.administrative_expenses)
    setPayment(user.profile.fiscal.worker.salary)
    setweeklyHours(user.profile.fiscal.weekly_hours)
  }, [user.profile])

  const selectTheFollow = (value:string) => setSegment(value)
  const selectTheTaxRegime = (value:string) => setTaxRegime(value)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (user.services.length === 0) {
      toast({
        title: 'Você precisa cadastrar um serviço para continuar',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
      return
    }
    
    const profile: ProfileType = {
      email: user.profile.email,
      name: company,
      segment,
      tax_regime: taxRegime,
      fiscal: {
        administrative_expenses: administrativeExpenses,
        weekly_hours: weeklyHours,
        worker: {
          salary: payment,
          weekly_hours: weeklyHours
        } 
      },
    }

    user.saveUserProfile(profile)
    updateProfile(user.id, profile)

    toast({
      title: 'Perfil atualizado com sucesso',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    })
  }

  return (
    <Card className="h-full" orientation="vertical">
      <h2>Perfil</h2>

      <form onSubmit={handleSubmit} className={css["data"]}>

        <div className={css["inputs"]}>
          <div className={css["avatar_and_email"]}>
            <Avatar  />
            <Input 
              name="email" 
              label="E-mail" 
              disabled
              value={user.profile.email}
            />
          </div>
          <div className={css["name_and_follow"]}>
            <Input 
              name="name" 
              label="Nome" 
              required
              value={company}
              onInput={(value) => setCompany(value)} 
            />
            <Select 
              label='Serviço' 
              name='service' 
              options={segments} 
              defaultValue={segment || (segments.length ? segments[0].value : '')} 
              onValueChange={selectTheFollow} 
            />
          </div>
        </div>

        <div className={css["finance"]}>
          <h3>Financeiro</h3>
          <Input 
            name="administrative_expenses" 
            label="Despesas administrativas" 
            className={css['administrative_expenses']}
            required
            isMoney
            value={administrativeExpenses}
            onInput={(value) => setAdministrativeExpenses(value)}
          />
          <Select 
            label='Regime tributário' 
            name='tax_regime' 
            options={taxRegimes} 
            defaultValue={taxRegime || (taxRegimes.length > 0 ? taxRegimes[0].value : '')} 
            onValueChange={selectTheTaxRegime} 
          />
          <Input 
            name="payment" 
            label="Pró-labore" 
            required
            isMoney
            value={payment}
            onInput={(value) => setPayment(value)}
          />
          <Input 
            name="weekly_hours" 
            label="Horas semanais" 
            required
            type='number'
            value={`${weeklyHours}`}
            onInput={(value) => setweeklyHours(parseFloat(value))}
          />
        </div>

        <div className={css["services"]}>
          <h3>Serviço</h3>
          <ScrollArea className={css["content"]}>
            <ItemNew title='Novo Serviço'>
              <FormService />
            </ItemNew>
            {
              user.services &&
              user.services.reverse().map((service) => (
                <ItemService key={service.id} item={service} />
              ))
            }
          </ScrollArea>
        </div>

        <Button icon={Save} type="submit" variant="secondary">
          Salvar perfil
        </Button>
      </form>
    </Card>
  )
}

export default Profile