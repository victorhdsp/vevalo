import { UserTypes } from "@/assets/data/type";
import { onValue, ref, set } from "firebase/database";

import { database } from './index'
import { useUser } from "@/store/User";

const crypto = (text:string) => text.replaceAll('.', '_')

export async function createNewUser(email: string, data:UserTypes) {
  console.log(email)
  await set(ref(database, 'users/' + crypto(email)), data);
  return true
}

export function getUser(email: string) {
  let user:UserTypes | undefined = undefined

  onValue(ref(database, 'users/' + crypto(email)), async (snapshot) => {
    user = await snapshot.val()
    console.log('snapshot')
  })
  
  // while (!user) {}
  console.log(user)
  if (!user) return false
  return user
}