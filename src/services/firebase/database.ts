import { UserTypes } from "@/assets/data/type";
import { get, ref, set, update } from "firebase/database";

import { currentUser, database } from './index'
import { useUser } from "@/store/User";


export async function createNewUserData(uid:string, data:UserTypes) {
  try {
    await set(ref(database, 'users/' + uid), data);
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function updateUserData(uid:string, data:UserTypes) {
  try {
    await update(ref(database, 'users/' + uid), data);
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getUserData() {
  const uid = currentUser()?.uid
  if (!uid) { return false }

  const snapshot = await get(ref(database, 'users/' + uid))
  if (!snapshot.exists()) { return false }

  const user: UserTypes = snapshot.val()
  useUser.getState().saveUser(user)
  
  return user
}