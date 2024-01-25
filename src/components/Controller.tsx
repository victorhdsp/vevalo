"use client";

import { currentUser } from '@/services/firebase';

import { getUserData } from '@/services/firebase/database'

import { useUser } from '@/store/User';
import { redirect } from 'next/navigation';

import { useEffect } from "react";

const Controller = () => {

  useEffect(() => {
    // setTimeout(() => {
    //   const hasLoggedUser =  currentUser() ? true : false
      
    //   if (hasLoggedUser) {
    //     getUserData()
        
    //   } else {
    //     // window.location.href = "/entrar"
    //     redirect('/entrar')
    //   }
    // }, 1000)
  }, [])

  return (
    <></>
  )
}

export default Controller