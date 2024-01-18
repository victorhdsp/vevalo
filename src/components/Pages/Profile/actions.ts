"use client"

import { UserType } from "@/assets/data/type";
import { updateUserData } from "@/services/firebase/database";
import { useUser } from "@/store/User";
import { User } from "firebase/auth";

export async function updateProfile(uid:string, profile:UserType['profile']) {
  if (uid && profile) {
    const { services, budgets, projects} = useUser.getState()

    const user: UserType = {
      id: uid,
      profile,
      services,
      budgets,
      projects
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