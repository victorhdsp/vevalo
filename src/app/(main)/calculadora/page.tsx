'use client';

import css from './style.module.scss'

import Calculator from '@/components/Pages/Calculator'
import { useToast } from '@chakra-ui/react'

import { useUser } from '@/store/User';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function Calculadora() {
  const administrative_expenses = useUser(store => store.user.profile.fiscal.administrative_expenses)
  const toast = useToast()

  useEffect(() => {
    if(administrative_expenses === '0') {
      toast({
        title: "Preencha o perfil",
        description: "Você precisa preencher o perfil",
        status: "error",
        duration: 5000,
        isClosable: true,
      })

      redirect('/perfil')
    }
  }, [])

  return (
    <div className={css['page']}>
      <Calculator.Project />
      <Calculator.Resume />
    </div>
  )
}
