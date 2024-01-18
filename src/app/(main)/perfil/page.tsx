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
    if (!profile.fiscal.administrative_expenses) createToast('Preencha as despesas administrativas', 'error')
    if (!profile.fiscal.weekly_hours[0]) createToast('Preencha as horas semanais', 'error')
    if (services.length == 0) createToast('Adicione pelo menos um serviço', 'error')
    if (workers.length == 0) createToast('Adicione pelo menos um colaborador', 'error')
    return
  }

  return (
    <div className={css['page']}>
      <Profile.Company onSave={handleSave} />
      <Profile.Collaborators />
      <Profile.Services />
    </div>
  )
}
