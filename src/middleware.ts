import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default async function middleware(req: NextRequest) {
  if(req.nextUrl.pathname =="/"){

    return NextResponse.next();
  }
}