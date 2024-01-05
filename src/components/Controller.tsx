"use client";

import { getCookie } from '@/assets/utils';
import firebase from '@/assets/utils/firebase'

import { useEffect } from "react";

const Controller = () => {
  useEffect(() => {
    firebase()

    const token = getCookie('token')
    const email = getCookie('email')
    const currentPage = window.location.pathname
    
    if ((!token || !email) && currentPage != "/entrar") {
      window.location.href = "/entrar"
    }
  }, [])

  return (
    <></>
  )
}

export default Controller