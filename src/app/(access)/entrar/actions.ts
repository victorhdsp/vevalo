"use client"

import { UserTypes } from "@/assets/data/type";
import { createNewUserData } from "@/services/firebase/database";
import { useUser } from "@/store/User";
import { User } from "firebase/auth";

export async function userRegister(currentUser: User) {
  if (currentUser && currentUser.uid && currentUser.email) {
    const { profile, services, budgets, projects} = useUser.getState()

    const user: UserTypes = {
      id: currentUser.uid,
      profile: {
        ...profile,
        email: currentUser.email,
      },
      services,
      budgets,
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