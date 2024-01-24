"use client";

import { redirect } from 'next/navigation';
import { useEffect } from "react";

import { auth } from '@/services/firebase';
import { getUserData } from '@/services/firebase/database'
import { useUser } from '@/store/User';

import { onAuthStateChanged } from 'firebase/auth';


const Controller = () => {
  const user = useUser(store => store.user)

  useEffect(() => {
  //  user.profile.company.email ? redirect('/perfil') : redirect('/entrar')
  }, [])

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (hasConnected) => {
  //     if (hasConnected) {
  //       await getUserData()
  //     } else {
  //       window.location.href = '/entrar'
  //     }
  //   });
  // }, [])

  return (
    <></>
  )
}

export default Controller