"use client"

import { UserType } from "@/assets/data/type";
import { createNewUserData } from "@/services/firebase/database";
import { useUser } from "@/store/User";
import { User } from "firebase/auth";

export async function userRegister(currentUser: User) {
  if (currentUser && currentUser.uid && currentUser.email) {
    const { profile, services, workers, projects} = useUser.getState().user

    const user: UserType = {
      id: currentUser.uid,
      profile: {
        ...profile,
        company: {
          ...profile.company,
          email: currentUser.email,
        } 
      },
      services,
      workers,
      projects
    }
    
    const created = await createNewUserData(user.id, user)

    if (created) {
      return true
    } else {
      console.log('erro ao registrar usuário')
    }
  }

  return false
}