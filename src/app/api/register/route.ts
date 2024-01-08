import { NextResponse } from "next/server";
import starter from "@/assets/data/starter"
import { UserTypes } from "@/assets/data/type";
import { createNewUser } from "@/assets/utils/firebase/database";

export async function POST(request: Request) {
  const user:UserTypes = await request.json()

  const created = await createNewUser(user.profile.email, user)

  if (created) {
    return NextResponse.json({})
  } else {
    return NextResponse.error()
  }

}