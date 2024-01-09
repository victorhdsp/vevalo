"use client";

import { auth } from '@/services/firebase';

import { getUser } from '@/services/firebase/database'
import { useUser } from '@/store/User';

import { onAuthStateChanged } from 'firebase/auth';

import { useEffect } from "react";

const Controller = () => {

  useEffect(() => {
    onAuthStateChanged(auth, async (hasConnected) => {
      if (hasConnected) {
        await getUser()
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