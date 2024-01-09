'use client';

import NewProject from '@/components/NewProject'
import { useToast } from '@chakra-ui/react'

import { useUser } from '@/store/User';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function Calculadora() {
  const [fiscal, email] = useUser(state => [state.profile.fiscal, state.profile.email])
  const toast = useToast()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (email) {
      if (!fiscal.administrative_expenses || !fiscal.worker.salary) {
        setError(true)
      }
    }
  }, [])

  useEffect(() => {
    if (error) {
      toast({
        title: 'Você precisa preencher seu perfil para continuar',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })

      redirect('/perfil')
    }
  }, [error])

  return (
    <>
      <NewProject />
    </>
  )
}
