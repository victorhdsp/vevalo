"use client";

import { currentUser } from '@/services/firebase';

import { getUserData } from '@/services/firebase/database'

import { useUser } from '@/store/User';
import { useRouter } from 'next/navigation';

import { useEffect } from "react";

const Controller = () => {
  const user = useUser(store => store.user)
  const router = useRouter()

  useEffect(() => {
    let hasLoggedUser = false

    if(user.profile.company.email) {
      hasLoggedUser = true
    }
    if (hasLoggedUser) {
      // getUserData()
      
    } else {
      router.push('/entrar')
    }
  }, [])

  return (
    <></>
  )
}

export default Controller