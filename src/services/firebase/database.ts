import { UserTypes } from "@/assets/data/type";
import { get, ref, set, update } from "firebase/database";

import { currentUser, database } from './index'
import { useUser } from "@/store/User";


export async function createNewUser(uid:string, data:UserTypes) {
  try {
    await set(ref(database, 'users/' + uid), data);
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function updateUser(uid:string, data:UserTypes) {
  try {
    await update(ref(database, 'users/' + uid), data);
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getUser() {
  const uid = currentUser()?.uid
  if (!uid) { return false }

  const snapshot = await get(ref(database, 'users/' + uid))
  if (!snapshot.exists()) { return false }

  const user: UserTypes = snapshot.val()
  useUser.getState().saveUser(user)
  
  return true
}