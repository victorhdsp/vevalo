"use client";

import '@/assets/utils/firebase'

import { UserTypes } from '@/assets/data/type';
import { getCookie } from '@/assets/utils';

import { getUser } from '@/assets/utils/firebase/database'

import { useUser } from '@/store/User';

import { useEffect } from "react";

const Controller = () => {
  const [profile, saveUser] = useUser(store => [store.profile, store.saveUser])

  useEffect(() => {
    if (!profile.email) {
      const email = getCookie('email')

      if (email) {
        const user = getUser(email)
        console.log(user)
        if (!user) {
          // window.location.href = "/entrar"
        } else {
          saveUser(user)
        }
      }
    }
  }, [])

  return (
    <></>
  )
}

export default Controller