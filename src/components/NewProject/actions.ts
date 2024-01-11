"use client"

import { UserTypes } from "@/assets/data/type";
import { updateUserData } from "@/services/firebase/database";
import { useUser } from "@/store/User";

export async function newProject(uid:string) {
  if (uid) {
    const { services, budgets, projects, profile} = useUser.getState()

    const user: UserTypes = {
      id: uid,
      profile,
      services,
      budgets,
      projects: [...projects]
    }
    
    const changed = await updateUserData(uid, user)

    if (changed) {
      return true
    } else {
      console.log('erro ao modificar usuário')
    }
  }

  return false
}