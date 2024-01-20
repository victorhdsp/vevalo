"use client";

import { auth } from '@/services/firebase';

import { getUserData } from '@/services/firebase/database'
import { useUser } from '@/store/User';

import { onAuthStateChanged } from 'firebase/auth';

import { useEffect } from "react";

const Controller = () => {

  useEffect(() => {
    onAuthStateChanged(auth, async (hasConnected) => {
      if (hasConnected) {
        await getUserData()
      } else {
        window.location.href = '/entrar'
      }
    });
  }, [])

  return (
    <></>
  )
}

export default Controller