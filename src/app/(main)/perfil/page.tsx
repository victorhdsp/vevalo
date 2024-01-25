'use client';

import css from './style.module.scss'

import { useToast } from '@chakra-ui/react'

import { useUser } from '@/store/User';

import Profile from '@/components/Pages/Profile'
import { useUserDatabase } from '@/store/DatabaseUser';

type CreateToast = (title: string, status: 'success' | 'error') => void

function ProfilePage() {
  const user = useUser((store) => (store.user))
  const [saveOnDatabase, databaseUser] = useUserDatabase((store) => ([store.saveOnDatabase, store.user]))
  const toast = useToast()

  const handleSave = () => {
    const { profile, services, workers } = user
    const createToast: CreateToast = (title, status) => {
      toast({ title, status, duration: 5000, isClosable: true })
    }
      
    if (!profile.company.name) createToast('Preencha o nome da empresa', 'error')
    else if (!profile.fiscal.administrative_expenses) createToast('Preencha as despesas administrativas', 'error')
    else if (!profile.fiscal.weekly_hours[0]) createToast('Preencha as horas semanais', 'error')
    else if (services.length == 0) createToast('Adicione pelo menos um serviço', 'error')
    else if (workers.length == 0) createToast('Adicione pelo menos um colaborador', 'error')
    else createToast('Perfil salvo com sucesso', 'success');

    saveOnDatabase(user)
  }
  
  return (
    <div className={css['page']}>
      <Profile.Company onSave={handleSave} />
      <Profile.Collaborators />
      <Profile.Services />
    </div>
  )
}

export default ProfilePage