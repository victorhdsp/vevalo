import { NextResponse } from "next/server";
import starter from "@/assets/data/starter"
import { UserTypes } from "@/assets/data/type";

export async function POST(request: Request) {
  const user:UserTypes = await request.json()
  starter.profile.email = user.profile.email
  // console.log(starter)

  return NextResponse.json({})
}