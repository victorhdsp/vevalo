"use client";

import { auth } from '@/services/firebase';

import { getUser } from '@/services/firebase/database'

import { onAuthStateChanged } from 'firebase/auth';

import { useEffect } from "react";

const Controller = () => {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser()
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