"use client";

import { UserTypes } from '@/assets/data/type';
import { getCookie } from '@/assets/utils';

import { currentUser } from '@/services/firebase';

import { getUser } from '@/services/firebase/database'

import { useUser } from '@/store/User';
import { redirect } from 'next/navigation';

import { useEffect } from "react";

const Controller = () => {
  const [profile, saveUser] = useUser(store => [store.profile, store.saveUser])

  useEffect(() => {
    setTimeout(() => currentUser(), 1000)
    if (currentUser()) {
      getUser()

    } else {
      // window.location.href = "/entrar"
      // redirect('/entrar')
    }
    // if (!profile.email) {
    //   const email = getCookie('email')

    //   if (email) {
    //     const user = getUser(email)
    //     console.log(user)
    //     if (!user) {
    //       // window.location.href = "/entrar"
    //     } else {
    //       saveUser(user)
    //     }
    //   }
    // }
  }, [])

  return (
    <></>
  )
}

export default Controller