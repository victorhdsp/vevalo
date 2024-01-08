"use client"

import { useUser } from "@/store/User";
import { useCurrentProfile } from "@/store/currentProfile";

export async function userRegister(email:string) {
  if (email) {
    const setEmail = useCurrentProfile.getState().setEmail
    const saveUserProfile = useUser.getState().saveUserProfile
    
    setEmail(email)
    const profile = useCurrentProfile.getState()
    
    saveUserProfile(profile)
    const user = useUser.getState()
  
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
    })

    if (response.ok) {
      return true
    } else {
      console.log('erro ao registrar usuário: ', response)
    }
  } else {
    console.log('email inválido: ', email)
  }

  return false
}