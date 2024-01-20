'use client';

import css from './style.module.scss'

import { useToast } from '@chakra-ui/react'

import { useUser } from '@/store/User';

import Profile from '@/components/Pages/Profile'

export default function ProfilePage() {
  const [profile, services, workers] = useUser((store) => ([store.user.profile, store.user.services, store.user.workers]))
  const toast = useToast()

  const handleSave = () => {
    const createToast = (title: string, status: 'success' | 'error') => {
      toast({ title, status, duration: 5000, isClosable: true })
    }

    if (!profile.company.name) createToast('Preencha o nome da empresa', 'error')
    else if (!profile.fiscal.administrative_expenses) createToast('Preencha as despesas administrativas', 'error')
    else if (!profile.fiscal.weekly_hours[0]) createToast('Preencha as horas semanais', 'error')
    else if (services.length == 0) createToast('Adicione pelo menos um serviço', 'error')
    else if (workers.length == 0) createToast('Adicione pelo menos um colaborador', 'error')
    else createToast('Perfil salvo com sucesso', 'success')
  }

  return (
    <div className={css['page']}>
      <Profile.Company onSave={handleSave} />
      <Profile.Collaborators />
      <Profile.Services />
    </div>
  )
}
